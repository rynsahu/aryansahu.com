import "../styles/global.css";

import { StrictMode } from "react";
import { BrowserRouter } from "react-router";
import AppRouter from "./AppRouter";

export default function App() {
    return (
        <StrictMode>
            <BrowserRouter>
                <AppRouter />
            </BrowserRouter>
        </StrictMode>
    )
}
