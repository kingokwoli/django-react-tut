

const LearnEvents = () => {

    const handleSubmit = () => {
        console.log("Submit Init");
    }

    const handleCreate = (p) => {
        console.log(p);
    }
  return (
      <>
          <h2>Learning JSX event handling</h2>
          
          <button onClick={handleSubmit}>SUBMIT</button>
          <br />

          <button onClick={() => handleCreate("item created")}>CREATE</button>
      </>
  )
}

export default LearnEvents
