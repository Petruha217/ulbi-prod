import { useState } from "react";
import classes from './counter.module.scss';


export const Counter = function () {
  const [count, setCount] = useState(0);
  const handlerIncrement = () => {
    setCount(count => count + 1)
  }

  return (
    <div className="counter">
      <h1>{ count }</h1>
      <button className={classes.btn} onClick={handlerIncrement}>increment</button>
    </div>
  )
}