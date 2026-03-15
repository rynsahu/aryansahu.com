import express from "express";
import { createServer as createViteServer } from "vite";
import { readFileSync } from "node:fs";
import path from "path";

async function createServer() {
    const app = express();

    const vite = await createViteServer({
        appType: 'custom',
        server: { middlewareMode: true }
    });

    app.use(vite.middlewares);

    app.use('*all', async (req, res, next) => {
        const url = req.originalUrl

        try {
            let template = readFileSync(path.resolve(import.meta.dirname, 'index.html'), 'utf-8');

            template = await vite.transformIndexHtml(url, template)

            const { render } = await vite.ssrLoadModule('/src/entry-server.jsx')

            const rendered = await render(url)

            const html = template.replace(`<!--ROOT-->`, rendered.html)

            res.status(200).set({ 'Content-Type': 'text/html' }).end(html)
        } catch (e) {
            vite.ssrFixStacktrace(e)
            next(e)
        }
    });

    app.listen(5173);
}

createServer();
