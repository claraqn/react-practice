import React, { useState } from 'react';

function Counter() {
  const [number, setNumber] = useState(0);
  const onIncrease = () => {
    // console.log('+1');
    // setNumber(number + 1);
    setNumber((prevNumber) => prevNumber + 1);
  };
  const onDecrease = () => {
    // console.log('-1');
    // setNumber(number - 1);
    setNumber((prevNumber) => prevNumber - 1);
  };
  function upCrease() {
    console.log('-2');
    setNumber(number + 2);
  }
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
      <button onClick={upCrease}>up</button>
    </div>
  );
}

export default Counter;
