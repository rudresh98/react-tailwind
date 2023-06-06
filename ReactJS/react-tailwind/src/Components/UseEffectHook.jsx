import React, { useEffect, useState } from "react";
import Button from "../Shared/Button";

const UseEffectHook = () => {
  const [counter, setCounter] = useState(0);
  const addHandler = () => {
    console.log("add");
    setCounter(counter + 1);
    console.log(counter);
  };

  const subHandler = () => {
    setCounter(counter - 1);
    console.log(counter);
  };
  useEffect(() => {
    console.log("use effect called", { counter });
  }, [counter]);
  return (
    <div>
      <div className="flex justify-center ">
        <Button buttonname="add" className="my-5" onClick={addHandler} />
      </div>
      <p className="text-6xl text-center">{counter}</p>
      <p className="text-center text-6xl">even</p>
      <div className="flex justify-center ">
        <Button buttonname="sub" className="my-5" onClick={subHandler} />
      </div>
    </div>
  );
};

export default UseEffectHook;
