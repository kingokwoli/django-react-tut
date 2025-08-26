import { useState, useRef } from "react"


const LearnUseRef = () => {
    const [name, setName] = useState('')
    const refElement = useRef('')
    const prevNameRef = useRef('')

    console.log(refElement)

    const clearText = () => {
        setName("")
        refElement.current.focus()
    }

    const handeInput = (e) => {
        prevNameRef.current = name
        setName(e.target.value)
    }

  return (
      <>
          <h1>Learn useRef</h1>
          <input ref={refElement} type="text" value={name} onChange={handeInput} />
          <button onClick={clearText}>CLEAR</button>
          <br />
          <p>Previous Name: {prevNameRef.current} </p>
      </>
  )
}

export default LearnUseRef
