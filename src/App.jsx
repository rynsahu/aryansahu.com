import { createElement as h, useState } from "react";

export default function App() {
    const [count, setCount] = useState(0);

    // return h('div', null, [
    //     h('h1', { key: 1 },'Hello, Welcome to my page'),
    //     h('br', { key: 2 }),
    //     h('button', { key: 3, onClick: () => setCount(count - 1)}, '-'),
    //     h('p', { key: 4, style: { 'display': 'inline', 'margin': '0 10px' } }, count),
    //     h('button', { key: 5, onClick: () => setCount(count + 1)}, '+')
    // ]);

    console.log(import.meta)

    return (
        <div>
            <h1>Hello from JSX</h1>
            <button onClick={() => setCount(count - 1)}>-</button>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>+</button>
        </div>
    );
}