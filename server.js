import "dotenv/config";
import express from "express";
import { createServer as createViteServer } from "vite";
import path, { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { readFileSync } from "node:fs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const isProduction = process.env.NODE_ENV === 'production';

async function createServer() {
    const app = express();

    let vite;

    if (!isProduction) {
        vite = await createViteServer({
            appType: "custom",
            server: { middlewareMode: true },
        });

        app.use(vite.middlewares);
    } else {
        const compression = (await import('compression')).default;
        const serveStatic = (await import('serve-static')).default;

        app.use(compression());
        app.use('/assets', serveStatic(path.join(__dirname, 'dist/client/assets')));
    }

    app.use('*all', async (req, res, next) => {
        const url = req.originalUrl;
        let template;
        let render;

        if (!isProduction) {
            template = readFileSync(path.join(__dirname, 'index.html'), 'utf8');
            template = await vite.transformIndexHtml(url, template);
            render = (await vite.ssrLoadModule('/src/entry-server.tsx')).render;
        } else {
            template = readFileSync(path.join(__dirname, 'dist/client/index.html'), 'utf-8');
            render = (await import('./dist/server/entry-server.js')).render;
        }

        const { html: appHtml } = render(url);
        const html = template.replace('<!--ROOT_OUTLET-->', appHtml);

        res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
    });

    return app;
}

const app = await createServer();

if (!isProduction) {
    const PORT = process.env.PORT || 5173;
    app.listen(PORT, () => {
        console.info(`Server is listening on ${PORT}...`);
    });
}

export default app;
