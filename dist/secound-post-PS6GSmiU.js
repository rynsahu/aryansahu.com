import { R as React } from './hydrate.js';

const title = "My First Post";
const navLabel = "Post 2";
const content = () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "My Secound Post"), /*#__PURE__*/React.createElement("p", null, "This is my first blog post"));

export { content, navLabel, title };
