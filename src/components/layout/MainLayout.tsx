import { Link, Outlet } from "react-router";
import profilePhone from '../../assests/aryan-sahu-profile.jpeg';
import Divider from "../Divider";

export default function MainLayout() {
    return (
        <div className="container py-8 px-4 flex flex-col">
            <header className="flex flex-col gap-4">
                <img src={profilePhone} alt="Aryan Sahu" width={40} height={40} className="rounded-full" />
                <h1 className="text-2xl color-primary font-medium">
                    <span>Aryan Sahu </span>
                    <i className="color-secondary font-primer">aks </i>
                    <Link to="https://linkedin.com/in/rynsahu" target="_blank" className="color-primary font-normal hover_underline">@rynsahu</Link>
                </h1>
                {/* Navigation */}
                <nav className="flex items-center gap-4">
                    <Link to="/">Home</Link>
                    <Link to="/inspiration">Inspiration</Link>
                    <Link to="/blog">Blog</Link>
                </nav>
            </header>

            {/* Page main content */}
            <main className="mt-4">
                <Outlet />
            </main>

            <Divider />

            <footer className="flex flex-col items-center gap-4 text-sm color-quaternary mb-2">
                <p className="text-2xl color-primary font-bold">Aryan Sahu</p>
                <div className="text-center">
                    <p>Built by yours truly. Here's the <Link to="https://github.com/rynsahu" className="color-primary hover_underline">code</Link>.</p>
                    <p>Website heavily inspired by <Link to="https://www.designerdada.com" target="_blank" rel="noopener noreferrer" className="color-primary hover_underline">Akash Bhadange</Link></p>
                </div>
            </footer>
        </div>
    )
}