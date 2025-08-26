import { useState } from "react"


const CounterApp = () => {
    const [count, setCount] = useState(0)

    const increaseCount = () => {
        setCount(count + 1)
    }

    const decreaseCount = () => {
        setCount(count - 1)
    }

    const resetCount = () => {
        setCount(0)
    }

  return (
      <>
          <h1>Counter</h1>
          <h2>Count: {count} </h2>
          <button onClick={increaseCount}>INCREASE</button>
          <button onClick={decreaseCount}>DECREASE</button>
          <button onClick={resetCount}>RESET</button>
      </>
  )
}

export default CounterApp
