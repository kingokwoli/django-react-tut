

const LearnMap = () => {
    const names = ["King", "Jon", "Presh", "Nique"];

  return (
      <>
          <h1>Map Function</h1>

          <ul>
              {names.map((name, index) => (
                  <li key={index}>{name}</li>
              ))}
          </ul>
      
      </>
  )
}

export default LearnMap
