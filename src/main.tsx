import { hydrateRoot } from "react-dom/client";
import App from "./app/App";
import posthog from "posthog-js";
import { PostHogErrorBoundary, PostHogProvider } from "@posthog/react";

posthog.init(import.meta.env.VITE_PUBLIC_POSTHOG_PROJECT_TOKEN, {
    api_host: import.meta.env.VITE_PUBLIC_POSTHOG_HOST,
    defaults: '2026-01-30',
});

hydrateRoot(
    document.getElementById('root') as HTMLElement,
    <PostHogProvider client={posthog}>
        <PostHogErrorBoundary>
            <App />
        </PostHogErrorBoundary>
    </PostHogProvider>
);
