
import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(7);

  return (
    <div id="wd-counter-use-state">
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)} className="btn btn-success" style={{ margin: '5px'}}>Up</button>
      <button onClick={() => setCount(count - 1)} className="btn btn-danger" style={{ margin: '5px'}}>Down</button>
      <hr />
    </div>
  );
}
