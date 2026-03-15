import express from "express";
import App from "../App.js";
import { renderToStaticMarkup } from "react-dom/server";
import { createElement } from "react";
import { fileURLToPath } from "node:url";
import path, { dirname } from "node:path";
import { readFileSync } from "node:fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
app.use(express.static(path.join(__dirname, 'dist')));

const shell = readFileSync(path.join(__dirname, 'index.html'), 'utf8');
const html = shell.split('<!--ROOT-->');

app.get("/", (req, res) => {
    res.write(html[0]);
    const appPage = renderToStaticMarkup(createElement(App));
    res.write(appPage);
    res.write(html[1]);
    res.end();
});

app.get('/client.js', (req, res) => {
    res.send(client);
})

app.listen(3434, () => {
    console.log("Server is listning on PORT 3434...");
})