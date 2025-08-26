import { useMemo, useState } from "react"


const LearnUseMemo = () => {
    const [count, setCount] = useState(0)
    const [num, setNum] = useState(100)

    const increaseCount = () => {
        setCount(count + 1);
    }

    // const sumOfNums = () => {
    //     let sum = 0;
    //     for (let i = 1; i <= num; i++){
    //         sum += i;
    //     }
    //     return sum;
    // }

    const sumOfNums = useMemo(() => {
        let sum = 0;
        for (let i = 1; i <= num; i++){
            sum += i;
        }
        return sum;
    })

    console.log(`Sum of nums from 1 to ${num}:`, sumOfNums);
    
  return (
      <>
          <h1>Count: {count} </h1>
          <button onClick={increaseCount}>INCREASE</button>
      </>
  )
}

export default LearnUseMemo
