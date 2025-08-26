

// const LearnProps = (props) => {
//   return (
//       <>
//           <h2>Props</h2>

//           <h3>Brand Names: {props.model} </h3>

//           <h3>Brand Price: ${props.price} </h3>
//       </>
//   )
// }

const LearnProps = ({model, price}) => {
  return (
      <>
          <h2>Props</h2>

          <h3>Brand Names: {model} </h3>

          <h3>Brand Price: ${price} </h3>
      </>
  )
}

export default LearnProps
