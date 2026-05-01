<wizard-report>
# PostHog post-wizard report

The wizard has completed a deep integration of PostHog analytics into aryansahu.com, a React Router v7 declarative-mode personal portfolio site built with Vite and SSR via Express.

## Summary of changes

- **`src/main.tsx`**: Initialized `posthog-js` with environment variables, wrapped the app with `PostHogProvider` and `PostHogErrorBoundary` for automatic error capture and React context access across the component tree.
- **`src/components/InfoCard/index.tsx`**: Added an optional `onClick` prop so pages can attach event handlers to clickable cards without changing their structure.
- **`src/pages/Home/index.tsx`**: Added `usePostHog` hook; captures `hire_me_clicked` when the "Hire me" card is clicked and `talk_link_clicked` when the "talk" CTA link in the intro is clicked.
- **`src/pages/Inspiration/index.tsx`**: Added `usePostHog` hook; captures `inspiration_resource_clicked` (with a `resource_name` property) on each inspiration card click.
- **`src/components/layout/MainLayout.tsx`**: Added `usePostHog` hook; captures `linkedin_profile_clicked` on the @rynsahu header link and `github_source_clicked` on the footer source code link.
- **`.env`**: Created with `VITE_PUBLIC_POSTHOG_PROJECT_TOKEN` and `VITE_PUBLIC_POSTHOG_HOST` (covered by `.gitignore`).

## Tracked events

| Event | Description | File |
|-------|-------------|------|
| `hire_me_clicked` | User clicked the "Hire me" card linking to resume/CV | `src/pages/Home/index.tsx` |
| `talk_link_clicked` | User clicked the "talk" CTA link in the intro paragraph | `src/pages/Home/index.tsx` |
| `inspiration_resource_clicked` | User clicked an inspiration resource card (includes `resource_name` property) | `src/pages/Inspiration/index.tsx` |
| `linkedin_profile_clicked` | User clicked the LinkedIn @rynsahu link in the header | `src/components/layout/MainLayout.tsx` |
| `github_source_clicked` | User clicked the GitHub source code link in the footer | `src/components/layout/MainLayout.tsx` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- **Dashboard — Analytics basics**: https://us.posthog.com/project/405293/dashboard/1532143
- **Hire me clicks over time**: https://us.posthog.com/project/405293/insights/UN0Pciw7
- **Hire intent conversion funnel** (pageview → hire_me_clicked): https://us.posthog.com/project/405293/insights/Qeq2iw1x
- **Inspiration resources — top clicked** (broken down by resource): https://us.posthog.com/project/405293/insights/YMmkfkct
- **External link clicks over time** (LinkedIn vs GitHub): https://us.posthog.com/project/405293/insights/eBfSpPUH
- **All engagement events — total counts**: https://us.posthog.com/project/405293/insights/sb7PbvcY

### Agent skill

We've left an agent skill folder in your project. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>
