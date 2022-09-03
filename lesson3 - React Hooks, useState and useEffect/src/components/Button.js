import React, { useState } from "react";

const Button = () => {

    const [count, setcount] = useState(0);

    const Increment = () => {
    setcount(count + 1)
    }

    const Decrement = () => {
    setcount(count - 1)
    }

  return (
    <div>
        <h1>{ count }</h1>
        <button onClick={Increment}>Add</button>
        <button onClick={Decrement}>Subtract</button>
    </div>
  )
}

export default Button