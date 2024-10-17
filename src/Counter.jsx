import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const handleAdd = () => {
    const newCount = count + 1;
    setCount(newCount);
  };
  const handelReduce = () => {
    const reduceCount = count - 1;
    setCount(reduceCount);
  };

  return (
    <div style={{ border: "2px solid red", borderRadius: "20px" }}>
      <h2>Counter: {count}</h2>

      <button onClick={handleAdd}>Add</button>
      <button onClick={handelReduce}>Reduce</button>
    </div>
  );
}
