import { renderToStaticMarkup } from "react-dom/server";
import { Link, NavLink, Outlet, Route, Routes, StaticRouter } from "react-router";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/components/Divider/index.tsx
function Divider() {
	return /* @__PURE__ */ jsx("div", { className: "w-full border-dotted my-10" });
}
//#endregion
//#region src/components/InfoCard/index.tsx
function Card({ children, link, className = "" }) {
	if (link) return /* @__PURE__ */ jsx(Link, {
		to: link,
		className,
		target: "_blank",
		rel: "noopener noreferrer",
		children
	});
	return /* @__PURE__ */ jsx("div", {
		className,
		children
	});
}
function InfoCard({ direction = "row", heading, icon, text, className = "", subHeading, headerWrapperClass = "", iconShadow = "", link = "" }) {
	const shadow = iconShadow ? iconShadow : link ? "shadow-2" : "shadow-1";
	return /* @__PURE__ */ jsxs(Card, {
		link,
		className: `flex ${direction === "col" ? "flex-col gap-3" : "gap-2 items-center"} text-sm ${className}`,
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: `flex ${subHeading ? "items-start" : "items-center"} gap-2 ${headerWrapperClass}`,
				children: [/* @__PURE__ */ jsx("img", {
					src: icon,
					alt: heading,
					width: 32,
					height: 32,
					className: `rounded-sm overflow-hidden ${shadow}`
				}), /* @__PURE__ */ jsxs("div", {
					className: "flex flex-col",
					children: [/* @__PURE__ */ jsx("p", {
						className: "text-sm font-normal color-primary text-nowrap",
						children: heading
					}), subHeading && /* @__PURE__ */ jsx("p", {
						className: "text-xs font-normal color-tertiary",
						children: subHeading
					})]
				})]
			}),
			direction === "row" && /* @__PURE__ */ jsx("div", { className: "dot" }),
			/* @__PURE__ */ jsx("p", {
				className: `color-tertiary ${link ? "hover_color-primary" : ""}`,
				children: text
			})
		]
	});
}
//#endregion
//#region src/assests/glancescreen_logo.jpeg
var glancescreen_logo_default = "/assets/glancescreen_logo-BMcp9qgH.jpeg";
//#endregion
//#region src/assests/publicis-sapient.jpeg
var publicis_sapient_default = "/assets/publicis-sapient-M6FGn3t_.jpeg";
//#endregion
//#region src/assests/thidiff_technologies_logo.jpeg
var thidiff_technologies_logo_default = "/assets/thidiff_technologies_logo-DhGfUuRI.jpeg";
//#endregion
//#region src/assests/roposo_clout_logo.jpeg
var roposo_clout_logo_default = "/assets/roposo_clout_logo-Bq7hdsLG.jpeg";
//#endregion
//#region src/assests/torchlite_logo.jpeg
var torchlite_logo_default = "/assets/torchlite_logo-Br_BlFcU.jpeg";
//#endregion
//#region src/assests/icons/terminal.svg
var terminal_default = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%3e%3c!--%20Orange%20rounded%20background%20--%3e%3crect%20width='32'%20height='32'%20rx='6'%20ry='6'%20fill='%23FF7E00'/%3e%3c!--%20Inner%20gradient%20for%20depth%20--%3e%3crect%20width='32'%20height='32'%20rx='6'%20ry='6'%20fill='url(%23grad)'/%3e%3c!--%20White%20window%20frame%20--%3e%3crect%20x='7'%20y='9'%20width='18'%20height='14'%20rx='2.5'%20ry='2.5'%20fill='white'%20opacity='0.95'%20filter='url(%23shadow)'/%3e%3c!--%20Two%20orange%20dots%20(window%20controls)%20--%3e%3ccircle%20cx='11'%20cy='13'%20r='1.2'%20fill='%23FF7E00'/%3e%3ccircle%20cx='14.5'%20cy='13'%20r='1.2'%20fill='%23FF7E00'/%3e%3cdefs%3e%3clinearGradient%20id='grad'%20x1='0'%20y1='0'%20x2='0'%20y2='1'%3e%3cstop%20offset='0%25'%20stop-color='white'%20stop-opacity='0.15'/%3e%3cstop%20offset='100%25'%20stop-color='black'%20stop-opacity='0.1'/%3e%3c/linearGradient%3e%3cfilter%20id='shadow'%20x='-20%25'%20y='-20%25'%20width='140%25'%20height='140%25'%3e%3cfeDropShadow%20dx='0'%20dy='1.5'%20stdDeviation='1.5'%20flood-color='%23000'%20flood-opacity='0.3'/%3e%3c/filter%3e%3c/defs%3e%3c/svg%3e";
//#endregion
//#region src/components/BlockContent/index.tsx
function BlockContent({ heading, children }) {
	return /* @__PURE__ */ jsxs("section", {
		className: "flex flex-col gap-8",
		children: [/* @__PURE__ */ jsx("h2", {
			className: "color-quaternary text-sm font-normal uppercase font-monospace",
			children: heading
		}), children]
	});
}
//#endregion
//#region src/components/PageContainer/index.tsx
function PageContainer({ children, className = "" }) {
	return /* @__PURE__ */ jsx("div", {
		className: `flex flex-col ${className}`,
		children
	});
}
//#endregion
//#region src/components/Paragraph/index.tsx
function Paragraph({ children }) {
	return /* @__PURE__ */ jsx("section", {
		className: "flex flex-col gap-4",
		children
	});
}
//#endregion
//#region src/pages/Home/index.tsx
function Home() {
	return /* @__PURE__ */ jsxs(PageContainer, { children: [
		/* @__PURE__ */ jsxs(Paragraph, { children: [
			/* @__PURE__ */ jsx("p", { children: "Frontend Engineer · 6 years · React, Next.js, TypeScript" }),
			/* @__PURE__ */ jsx("p", { children: "I'm a software engineer at heart, I've gone from writing my first component to leading full product frontends, mentoring devs, and caring deeply about things like CI/CD, bundle size, Core Web Vitals and code reviews that actually teach something." }),
			/* @__PURE__ */ jsx("p", { children: "When I'm not at my desk, I'm usually reading about AI, tinkering with LLMs, or thinking about frontend architecture problems I didn't ask for." }),
			/* @__PURE__ */ jsx("p", { children: "Currently exploring new opportunities. If you're building something ambitious, I'd love to talk." })
		] }),
		/* @__PURE__ */ jsx(Divider, {}),
		/* @__PURE__ */ jsx(BlockContent, {
			heading: "Experience / Companies I've worked with",
			children: /* @__PURE__ */ jsxs("div", {
				className: "flex flex-col gap-6",
				children: [
					/* @__PURE__ */ jsx(InfoCard, {
						direction: "col",
						heading: "Glance",
						subHeading: "SDE 2 → SDE 3 · Jul 2022 - Present",
						icon: glancescreen_logo_default,
						text: "Grew from building features to owning the entire frontend of Roposo Clout — architecture, performance, code review and team. Pushed an 80% improvement in Core Web Vitals, set up CI/CD with security checks, and mentored juniors while keeping the product moving."
					}),
					/* @__PURE__ */ jsx(InfoCard, {
						direction: "col",
						heading: "Publicis Sapient",
						subHeading: "Associate Experience Technology L2 · Mar 2021 - Jul 2022",
						icon: publicis_sapient_default,
						text: "Built SPA insurance products using React and Redux, hit 90% Jest test coverage, and worked in a full agile setup scrums, sprint planning, backlog grooming. Also managed content through AEM-CMS."
					}),
					/* @__PURE__ */ jsx(InfoCard, {
						direction: "col",
						heading: "Thidiff",
						subHeading: "Software Developer · Dec 2019 - Mar 2021",
						icon: thidiff_technologies_logo_default,
						text: "My first full-stack role — built RESTful APIs, developed reusable React components, and integrated third-party APIs (Trello, Shopify, BlueJeans). Shipped weekly with QA collaboration."
					})
				]
			})
		}),
		/* @__PURE__ */ jsx(Divider, {}),
		/* @__PURE__ */ jsx(BlockContent, {
			heading: "Projects",
			children: /* @__PURE__ */ jsxs("div", {
				className: "flex flex-col gap-6",
				children: [/* @__PURE__ */ jsx(InfoCard, {
					direction: "col",
					heading: "Roposo Clout",
					subHeading: "Lead Frontend",
					icon: roposo_clout_logo_default,
					text: /* @__PURE__ */ jsxs("div", {
						className: "flex flex-col gap-2",
						children: [/* @__PURE__ */ jsx("p", { children: "Took full ownership of the frontend from early stages not just building features but making architectural decisions, setting standards, and keeping the codebase maintainable as the product scaled. The impact that mattered most: an 80% improvement in Core Web Vitals, real-time analytics integrated end to end, and a deployment pipeline that actually gave the team confidence to ship." }), /* @__PURE__ */ jsxs("p", { children: [/* @__PURE__ */ jsx("b", { children: "Stack:" }), " Next.js · Redux · TypeScript · TailwindCSS · Node.js · Docker · Nginx · AWS S3 · Axios · Winston"] })]
					})
				}), /* @__PURE__ */ jsx(InfoCard, {
					direction: "col",
					heading: "Torchlite",
					subHeading: "Full Stack Developer",
					icon: torchlite_logo_default,
					text: /* @__PURE__ */ jsxs("div", {
						className: "flex flex-col gap-2",
						children: [/* @__PURE__ */ jsx("p", { children: "Built both the frontend and backend for a meeting and collaboration platform designed the API layer in Express, wired up PostgreSQL with Sequelize ORM, and delivered the full React frontend with role-based access control and a BlueJeans API integration for in-app meeting scheduling. Early in my career but one of the first times I saw the full picture from database to UI and understood how decisions on one end ripple through the other." }), /* @__PURE__ */ jsxs("p", { children: [/* @__PURE__ */ jsx("b", { children: "Stack:" }), " React · Redux · Express · Node.js · PostgreSQL · Material UI · AWS S3 · Sequelize ORM · Heroku"] })]
					})
				})]
			})
		}),
		/* @__PURE__ */ jsx(Divider, {}),
		/* @__PURE__ */ jsx(BlockContent, {
			heading: "Work with me",
			children: /* @__PURE__ */ jsx(InfoCard, {
				link: "/",
				iconShadow: "shadow-1",
				headerWrapperClass: "gap-4",
				heading: "Hire me",
				icon: terminal_default,
				text: "Let's build a world class website for your business."
			})
		})
	] });
}
//#endregion
//#region src/pages/Blog/index.tsx
function Blog() {
	return /* @__PURE__ */ jsx(PageContainer, {
		className: "gap-8",
		children: /* @__PURE__ */ jsx("p", { children: "Publishing soon..." })
	});
}
//#endregion
//#region src/pages/Inspiration/index.tsx
function Inspiration() {
	return /* @__PURE__ */ jsxs(PageContainer, {
		className: "gap-8",
		children: [/* @__PURE__ */ jsxs(Paragraph, { children: [/* @__PURE__ */ jsx("p", { children: "A list of all the people that I look up to, websites that I admire, tools that I use, videos that I watch and everything else that follows." }), /* @__PURE__ */ jsx("p", { children: "I will keep on updating this list as I find more inspiration." })] }), /* @__PURE__ */ jsxs("section", {
			className: "flex flex-col gap-4",
			children: [
				/* @__PURE__ */ jsx(InfoCard, {
					link: "https://frontendmasters.com",
					heading: "Frontend Masters",
					icon: "https://www.google.com/s2/favicons?domain=frontendmasters.com/&sz=48",
					text: "Learn from experts"
				}),
				/* @__PURE__ */ jsx(InfoCard, {
					link: "https://code.claude.com",
					heading: "Claude Code",
					icon: "https://www.google.com/s2/favicons?domain=code.claude.com&sz=48",
					text: "AI tool I use"
				}),
				/* @__PURE__ */ jsx(InfoCard, {
					link: "https://www.youtube.com/@syntaxfm",
					heading: "Syntax.fm",
					icon: "https://www.google.com/s2/favicons?domain=Syntax.fm&sz=48",
					text: "The web dev podcast I watch to stay current."
				}),
				/* @__PURE__ */ jsx(InfoCard, {
					link: "https://www.youtube.com/@campusx-official",
					heading: "CampusX",
					icon: "https://www.google.com/s2/favicons?domain=learnwith.campusx.in/&sz=48",
					text: "The channel I watch to go deep on AI and ML concepts."
				})
			]
		})]
	});
}
//#endregion
//#region src/assests/aryan-sahu-profile.jpeg
var aryan_sahu_profile_default = "/assets/aryan-sahu-profile-DkNS3tpm.jpeg";
//#endregion
//#region src/assests/signature-dark.png
var signature_dark_default = "/assets/signature-dark-BSN4Kyyx.png";
//#endregion
//#region src/components/layout/MainLayout.tsx
function MainLayout() {
	return /* @__PURE__ */ jsxs("div", {
		className: "container py-8 px-4 flex flex-col",
		children: [
			/* @__PURE__ */ jsxs("header", {
				className: "flex flex-col gap-4",
				children: [
					/* @__PURE__ */ jsx("img", {
						src: aryan_sahu_profile_default,
						alt: "Aryan Sahu",
						width: 40,
						height: 40,
						className: "rounded-full"
					}),
					/* @__PURE__ */ jsxs("h1", {
						className: "text-2xl color-primary font-medium",
						children: [
							/* @__PURE__ */ jsx("span", { children: "Aryan Sahu " }),
							/* @__PURE__ */ jsx("i", {
								className: "color-secondary font-primer",
								children: "aks "
							}),
							/* @__PURE__ */ jsx(Link, {
								to: "https://linkedin.com/in/rynsahu",
								target: "_blank",
								className: "color-primary font-normal hover_underline",
								children: "@rynsahu"
							})
						]
					}),
					/* @__PURE__ */ jsxs("nav", {
						className: "flex items-center gap-4",
						children: [
							/* @__PURE__ */ jsx(NavLink, {
								className: ({ isActive }) => isActive ? "color-primary underline" : "color-tertiary",
								to: "/",
								children: "Home"
							}),
							/* @__PURE__ */ jsx(NavLink, {
								className: ({ isActive }) => isActive ? "color-primary underline" : "color-tertiary",
								to: "/inspiration",
								children: "Inspiration"
							}),
							/* @__PURE__ */ jsx(NavLink, {
								className: ({ isActive }) => isActive ? "color-primary underline" : "color-tertiary",
								to: "/blog",
								children: "Blog"
							})
						]
					})
				]
			}),
			/* @__PURE__ */ jsx("main", {
				className: "mt-4",
				children: /* @__PURE__ */ jsx(Outlet, {})
			}),
			/* @__PURE__ */ jsx(Divider, {}),
			/* @__PURE__ */ jsxs("footer", {
				className: "flex flex-col items-center gap-4 text-sm color-quaternary mb-2",
				children: [/* @__PURE__ */ jsx("img", {
					src: signature_dark_default,
					width: 200
				}), /* @__PURE__ */ jsxs("div", {
					className: "text-center",
					children: [/* @__PURE__ */ jsxs("p", { children: [
						"Built by yours truly. Here's the ",
						/* @__PURE__ */ jsx(Link, {
							to: "https://github.com/rynsahu/aryansahu.com",
							target: "_blank",
							className: "color-primary underline",
							children: "code"
						}),
						"."
					] }), /* @__PURE__ */ jsxs("p", { children: ["Website heavily inspired by ", /* @__PURE__ */ jsx(Link, {
						to: "https://www.designerdada.com",
						target: "_blank",
						rel: "noopener noreferrer",
						className: "color-primary underline",
						children: "Akash Bhadange"
					})] })]
				})]
			})
		]
	});
}
//#endregion
//#region src/app/AppRouter.tsx
function AppRouter() {
	return /* @__PURE__ */ jsx(Routes, { children: /* @__PURE__ */ jsxs(Route, {
		element: /* @__PURE__ */ jsx(MainLayout, {}),
		children: [
			/* @__PURE__ */ jsx(Route, {
				index: true,
				element: /* @__PURE__ */ jsx(Home, {})
			}),
			/* @__PURE__ */ jsx(Route, {
				path: "/blog",
				element: /* @__PURE__ */ jsx(Blog, {})
			}),
			/* @__PURE__ */ jsx(Route, {
				path: "/inspiration",
				element: /* @__PURE__ */ jsx(Inspiration, {})
			})
		]
	}) });
}
//#endregion
//#region src/entry-server.tsx
function render(url) {
	return { html: renderToStaticMarkup(/* @__PURE__ */ jsx(StaticRouter, {
		location: url,
		children: /* @__PURE__ */ jsx(AppRouter, {})
	})) };
}
//#endregion
export { render };
