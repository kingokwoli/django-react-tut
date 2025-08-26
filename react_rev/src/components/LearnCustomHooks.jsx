import useCounter from "../hooks/useCounter"

const LearnCustomHooks = () => {
    const { count, increment, decrement, reset } = useCounter(10)
    
  return (
      <>
          <h1>Custom Hooks</h1>
          <h2>Count: {count} </h2>
          <button onClick={increment}>INCREASE</button>
          <button onClick={decrement}>DECREASE</button>
          <button onClick={reset}>RESET</button>
      </>
  )
}

export default LearnCustomHooks
