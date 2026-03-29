import { Route, Routes } from "react-router";
import Counter from "../features/Home";
import Contact from "../features/Contact";

export default function AppRouter() {
    return (
        <Routes>
            <Route path="/" Component={Counter} />
            <Route path="/contact" Component={Contact} />
        </Routes>
    );
}