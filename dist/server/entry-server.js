import { StrictMode, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { renderToString } from "react-dom/server";
//#region src/App.jsx
function App() {
	const [count, setCount] = useState(0);
	console.log(import.meta);
	return /* @__PURE__ */ jsxs("div", { children: [
		/* @__PURE__ */ jsx("h1", { children: "Hello from JSX" }),
		/* @__PURE__ */ jsx("button", {
			onClick: () => setCount(count - 1),
			children: "-"
		}),
		/* @__PURE__ */ jsx("p", { children: count }),
		/* @__PURE__ */ jsx("button", {
			onClick: () => setCount(count + 1),
			children: "+"
		})
	] });
}
//#endregion
//#region src/entry-server.jsx
function render(url) {
	return { html: renderToString(/* @__PURE__ */ jsx(StrictMode, { children: /* @__PURE__ */ jsx(App, {}) })) };
}
//#endregion
export { render };
