import React, { useState } from "react"; //rafce
// Компонент всегда с большой буквы (-функция, должна возвращать JSX)
const Counter = function () {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
    //передаем значение, на 1 большее чем likes
  }

  function decrement() {
    setCount(count - 1);
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;
