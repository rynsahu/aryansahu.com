import { Link, NavLink, Outlet } from "react-router";
import profilePhone from '../../assests/aryan-sahu-profile.jpeg';
import signatureDark from '../../assests/signature-dark.png';
import Divider from "../Divider";
import { usePostHog } from "@posthog/react";

export default function MainLayout() {
    const posthog = usePostHog();

    return (
        <div className="container py-8 px-4 flex flex-col">
            <header className="flex flex-col gap-4">
                <img src={profilePhone} alt="Aryan Sahu" width={40} height={40} className="rounded-full" />
                <h1 className="text-2xl color-primary font-medium">
                    <span>Aryan Sahu </span>
                    <i className="color-secondary font-primer">aks </i>
                    <Link to="https://linkedin.com/in/rynsahu" target="_blank" className="color-primary font-normal hover_underline" onClick={() => posthog?.capture('linkedin_profile_clicked')}>@rynsahu</Link>
                </h1>
                {/* Navigation */}
                <nav className="flex items-center gap-4">
                    <NavLink className={({ isActive }) => isActive ? 'color-primary underline' : 'color-tertiary'} to="/">Home</NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'color-primary underline' : 'color-tertiary'} to="/inspiration">Inspiration</NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'color-primary underline' : 'color-tertiary'} to="/blog">Blog</NavLink>
                </nav>
            </header>

            {/* Page main content */}
            <main className="mt-4">
                <Outlet />
            </main>

            <Divider />

            <footer className="flex flex-col items-center gap-4 text-sm color-quaternary mb-2">
                <img src={signatureDark} width={200} />
                <div className="text-center">
                    <p>Built by yours truly. Here's the <Link to="https://github.com/rynsahu/aryansahu.com" target="_blank" className="color-primary underline" onClick={() => posthog?.capture('github_source_clicked')}>code</Link>.</p>
                    <p>Website heavily inspired by <Link to="https://www.designerdada.com" target="_blank" rel="noopener noreferrer" className="color-primary underline">Akash Bhadange</Link></p>
                </div>
            </footer>
        </div>
    )
}