import {useState} from "react";

export const MicroTask04 = () => {
  let [a, setA] = useState(1);

  const onIncreaseClickHandler = () => {
    setA(++a);
    console.log(a);
  };
  const onResetClickHandler = () => {
    setA(a = 0);
    console.log(a);
  };

  return (
    <>
      <h1>{a}</h1>
      <button onClick={onIncreaseClickHandler}>Increase</button>
      <button onClick={onResetClickHandler}>Reset</button>
    </>
  );
};