import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "url";
import { renderToString } from "react-dom/server";
import React from "react";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Step 1: Define the pages
async function generatePageMetaData() {
    const pagesDir = path.join(__dirname, 'dist-build/components');
    const files = fs.readdirSync(pagesDir, { recursive: true }).filter(file => file.endsWith('.js'));
    const pages = {};

    const promises = files.map(async file => {
        console.log(`⚙️ Processing ${file}...`);

        const module = await import(path.join(pagesDir, file));
        const reactNode = React.createElement(module.content);
        const htmlString = renderToString(reactNode);

        return {
            data: {
                title: module.title,
                content: htmlString,
                navLabel: module.navLabel || '',
            },
            route: file.replace('.js', '')
        }
    });

    const modules = await Promise.all(promises);

    modules.forEach(module => pages[module.route] = module.data)

    return pages;
}

function generateHydationFile() {
    const files = fs.readdirSync(path.join(__dirname, "dist-build/components"), { recursive: true });
    const modules = {};

    const getFileNameFromPath = (filePath, fileType) => {
        return filePath.replace(fileType, '').replaceAll('/', '').replaceAll('-', '');
    }

    files.forEach(file => {
        if (!file.endsWith('.js')) return;
        console.log(file);
        const fileName = getFileNameFromPath(file, '.js');
        modules[fileName] = file;
    });

    const fileContent = `import React from "react";
    import { hydrateRoot } from "react-dom/client";
    
    async function hydrate() {
        const modules = {
            ${Object.entries(modules).map(
                ([fileName, file]) => `"${fileName}": () => import("../dist-build/components/${file}"),`).join('\n')
            }
        };

        const moduleName = getFileNameFromPathmame();
    
        const module = await modules[moduleName]();
        const Content = module.content;
        const rootElement = document.querySelector('main');
    
        hydrateRoot(rootElement, <Content />);
    }

    const getFileNameFromPathmame = () => {
        const pathname = window.location.pathname;

        if (pathname === '/') return "index";

        return pathname.replace('.html', '').replaceAll('/', '').replaceAll('-', '');
    }
    
    hydrate();
    `;

    fs.writeFileSync(path.join(__dirname, 'src/hydrate.jsx'), fileContent);
}

// Step 2: Layout template
function layout({ title, content, pages }) {
    const navLinks = Object.entries(pages).map(([route, { navLabel }]) => {
        let label;
        let url = `/${route}.html`;

        if (route === 'index') {
            label = 'Home';
            url = '/';
        }
        else {
            const routeArr = route.split('/');
            label = navLabel || routeArr[routeArr.length - 1].split('-').map(str => str.charAt(0).toUpperCase() + str.slice(1)).join(" ");
        }

        return `<a href="${url}">${label}</a>`
    }).join('');

    return `
    <!DOCTYPE html>
    <html>
        <head>
            <meta name="viewport", contnet="width:device-width, initial-scale:1.0" />
            <title>${title}</title>
            <style>
                body { font-family: system-ui; max-width: 800px; margin: 0 auto; padding: 20px; }
                nav { margin-bottom: 20px; }
                nav a { margin-right: 15px; }
            </style>
            <script defer src="/hydrate.js" type="module"></script>
            <script defer src="/client.js"></script>
        </head>
        <body>
            <nav>
                ${navLinks}
            </nav>
            <main>${content}</main>
        </body>
    </html>
    `.trim();
}


// Step 3: Build function - generate static HTML files
async function buildApp() {
    console.log('🏗️ Building...');
    const pages = await generatePageMetaData();
    await generateHydationFile();

    const distDir = path.join(__dirname, 'dist');
    const distDataDir = path.join(__dirname, 'dist/data');

    if (!fs.existsSync(distDir)) {
        fs.mkdirSync(distDir, { recursive: true });
    }

    if (!fs.existsSync(distDataDir)) {
        fs.mkdirSync(distDataDir, { recursive: true });
    }

    Object.entries(pages).forEach(([route, page]) => {
        const content = layout({ title: page.title, content: page.content, pages });

        const dir = path.dirname(route);

        if (dir !== '.') {
            console.log(dir)
            fs.mkdirSync(path.join(distDir, dir), { recursive: true });
            fs.mkdirSync(path.join(distDataDir, dir), { recursive: true });
        }

        const filePath = path.join(distDir, `${route}.html`);
        const jsonFilePath = path.join(distDataDir, `${route}.json`);

        fs.writeFileSync(filePath, content);
        fs.writeFileSync(jsonFilePath, JSON.stringify(page));

        console.log(`✅ Built ${route}...`);
    });
}

export default buildApp();
