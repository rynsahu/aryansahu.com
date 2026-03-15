import { StrictMode } from "react";
import App from "./App";
import { renderToStaticMarkup, renderToString } from "react-dom/server";

export function render(url) {
    const html = renderToString(
        <StrictMode>
            <App />
        </StrictMode>
    )

    return { html };
}
