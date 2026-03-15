import { fileURLToPath } from "node:url";
import path, { dirname } from "node:path";
import { readFileSync, existsSync, mkdirSync, readdirSync, unlinkSync, writeFileSync } from "node:fs";
import { renderToStaticMarkup } from "react-dom/server";
import { createElement } from "react";
import App from "../src/App.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const distPath = path.join(__dirname, 'dist');

const shell = readFileSync(path.join(__dirname, 'index.html'), 'utf8');
const app = renderToStaticMarkup(createElement(App));

const html = shell.replace('<!--ROOT-->', app);

if (!existsSync(distPath)) {
    mkdirSync(distPath);
} else {
    const files = readdirSync(distPath);
    for (const file of files) {
        unlinkSync(path.join(distPath, file));
    }
}

writeFileSync(path.join(distPath, 'index.html'), html);
