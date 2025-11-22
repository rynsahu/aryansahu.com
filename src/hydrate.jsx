import React from "react";
    import { hydrateRoot } from "react-dom/client";
    
    async function hydrate() {
        const modules = {
            "about": () => import("../dist-build/components/about.js"),
            "index": () => import("../dist-build/components/index.js"),
            "postsfirstpost": () => import("../dist-build/components/posts/first-post.js"),
            "postssecoundpost": () => import("../dist-build/components/posts/secound-post.js"),
        };

        const moduleName = getFileNameFromPathmame();
    
        const module = await modules[moduleName]();
        const Content = module.content;
        const rootElement = document.querySelector('main');
    
        hydrateRoot(rootElement, <Content />);
    }

    const getFileNameFromPathmame = () => {
        const pathname = window.location.pathname;

        if (pathname === '/') return "index";

        return pathname.replace('.html', '').replaceAll('/', '').replaceAll('-', '');
    }
    
    hydrate();
    