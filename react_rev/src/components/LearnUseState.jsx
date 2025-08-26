import { useState } from "react"


const LearnUseState = () => {

    const [num, setNum] = useState(10)

    console.log(num);

    const handleSubmit = () => {
        setNum(100)
    }
    
    const [brandPrice, setBrandPrice] = useState({ brand:'Benz', price:999})

    const updateBrandPrice = () => {
        setBrandPrice({...brandPrice, price:1999})
    }
    
  return (
      <>
          <button onClick={handleSubmit}>SUBMIT</button>

          <h2>Number: {num} </h2>
          <hr />

          <h2>{brandPrice.brand}: {brandPrice.price}</h2>

          <button onClick={updateBrandPrice}>SET</button>
      </>
  )
}

export default LearnUseState
