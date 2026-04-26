import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import Blog from "../pages/Blog";
import Iinspiration from "../pages/Inspiration";
import MainLayout from "../components/layout/MainLayout";

export default function AppRouter() {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/inspiration" element={<Iinspiration />} />
            </Route>
        </Routes>
    );
}