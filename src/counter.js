import React, { useState } from 'react';

function Counter(props) {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  const [hover, setHover] = useState(0);
  return (
    <div>
      <p>You clicked {count} times on {props.name}</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <p>you have hover {hover} times</p>
      <button onMouseOver={() => setHover(hover +1)}> Mouse over </button>
    </div>
  );
}
export default Counter;