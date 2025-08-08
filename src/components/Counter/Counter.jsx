import { useMemo, useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  const CountOne = () => {
    setCount(count + 1);
    console.log("count", count);
  };

  
  const calculation = useMemo(() =>{
     console.log("calculation");

    let valu = 0;
    for (let i = 0; i <= 1000000; i++) {
      valu = +i;
    }
    return valu;
  }, [count])

  return (
    <div>
      <h1>count = {count}</h1>
      <button onClick={CountOne}>increment</button>
      <h3>calculation {calculation}</h3>
      <div>
        <input type="text" onChange={(e) => setInput(e.target.value)} />
      </div>
    </div>
  );
}
export default Counter;
