import React from "react";
import "./App.css";
import { useEffect, useState } from "react";
export default function App() {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);

  async function getAdvice() {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    setAdvice(data.slip.advice);
  }

  useEffect(function () {
    getAdvice();
  }, []);

  function increment() {
    setCount(count + 1);
  }
  return (
    <div>
      <h1>{advice}</h1>
      <button
        onClick={() => {
          getAdvice();
          increment();
        }}
      >
        Get Advice
      </button>
      <p>
        You have read <strong>{count}</strong> pieces of advice
      </p>
    </div>
  );
}
