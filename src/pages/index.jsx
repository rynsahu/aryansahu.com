import React from 'react';

export const title = 'Counter Page';
export const navLabel = 'Counter';
export const content = () => {
    const [count, setCount] = React.useState(0);
    const [name, setName] = React.useState('');
    
    return (
        <div>
            <h1>Interactive Counter</h1>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(0)}>Reset</button>
            
            <hr />
            
            <input 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
            />
            <p>Hello, {name || 'stranger'}!</p>
        </div>
    );
};