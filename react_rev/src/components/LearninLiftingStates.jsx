

const LearninLiftingStates = (props) => {

    const handleSubmit = () => {
        let brand = "Benz"
        props.getBrand(brand)
    }
    return (
        <>
            <h2>Lifting States Up</h2>

            <button onClick={handleSubmit}>SUBMIT</button>
        </>
  )
}

export default LearninLiftingStates
