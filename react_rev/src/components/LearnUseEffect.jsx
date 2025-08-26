import { useEffect, useState } from "react"


const LearnUseEffect = () => {
    const [count, setCount] = useState(0)
    const [randomNum, setRandomNum] = useState(0)

    const increaseCount = () => {
        setCount(count + 1)
    }

    const genNum = () => {
        const num = Math.floor(Math.random() * 100);
        setRandomNum(num)
    }

    useEffect(() => {
        console.log("Called");

        return () => {
            console.log("Clean Up");
        }
    }, [count])

  return (
      <>
          <h1>Counter</h1>
          <h2>Count: {count} </h2>
          <button onClick={increaseCount}>INCREASE</button>
          <hr />

          <h2>Random Number: {randomNum} </h2>
          <button onClick={genNum}>ANY</button>
      </>
  )
}

export default LearnUseEffect
