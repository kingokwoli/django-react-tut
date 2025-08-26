import React from 'react'

const h2E = React.createElement("h2", null, "Understanding React JSX")

const LearninJSX = () => {

    let stock = "Emirates"
    
  return (
    <>
          {h2E}
          
          <h2>Stock Name: {stock} </h2>

          <h2>Price: ${1000 + 599} </h2>
          
          <h2 className='success'>Class in Session</h2>

          <h2 className={stock}>Dynamic Class Types</h2>
    </>
  )
}

export default LearninJSX
