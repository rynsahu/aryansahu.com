import { renderToStaticMarkup } from "react-dom/server";
import { StaticRouter } from "react-router";
import AppRouter from "./app/AppRouter";

export function render(url: string) {
    const html = renderToStaticMarkup(
        <StaticRouter location={url}>
            <AppRouter />
        </StaticRouter>
    );

    return { html };
}