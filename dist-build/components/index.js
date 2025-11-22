import React from 'react';

const title = 'Counter Page';
const navLabel = 'Counter';
const content = () => {
  const [count, setCount] = React.useState(0);
  const [name, setName] = React.useState('');
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Interactive Counter"), /*#__PURE__*/React.createElement("p", null, "Count: ", count), /*#__PURE__*/React.createElement("button", {
    onClick: () => setCount(count + 1)
  }, "Increment"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setCount(0)
  }, "Reset"), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: name,
    onChange: e => setName(e.target.value),
    placeholder: "Enter your name"
  }), /*#__PURE__*/React.createElement("p", null, "Hello, ", name || 'stranger', "!"));
};

export { content, navLabel, title };
