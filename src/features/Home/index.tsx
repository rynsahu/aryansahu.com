import { useState } from "react";

export default function Counter() {
    const [ count, setCount ] = useState(0);

    return (
        <div>
            <h1>Hello from React</h1>
            <button onClick={() => setCount(c => c - 1)}>-</button>
            <p>{count}</p>
            <button onClick={() => setCount(c => c + 1)}>+</button>
        </div>
    );
}
