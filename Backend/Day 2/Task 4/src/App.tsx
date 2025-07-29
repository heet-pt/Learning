import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState<number>(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    if (count == 0) {
      alert("You Cant Go In Negative Values");
    } else {
      setCount(count - 1);
    }
  };
  return (
    <>
      <section className="buttonsection">
        <h1 className="counts">Counter Is Clicked {count} times</h1>
        <button onClick={increment}>Increase</button>
        <button onClick={decrement}>Decrement</button>
      </section>
    </>
  );
}

export default App;
