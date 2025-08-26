import Wagwan from "./components/Wagwan"
import LearninJSX from "./components/LearninJSX"
import LearnProps from "./components/LearnProps"
import LearnEvents from "./components/LearnEvents"
import LearninLiftingStates from "./components/LearninLiftingStates"
import LearnUseState from "./components/LearnUseState"
import CounterApp from "./components/Counterapp"
import LearnUseEffect from "./components/LearnUseEffect"
import LearnUseMemo from "./components/LearnUseMemo"
import ChildA from "./components/ChildA"
import { createContext, useState } from "react"
import LearnUseRef from "./components/LearnUseRef"
import LearnCustomHooks from "./components/LearnCustomHooks"
import LearnConditionalRendering from "./components/LearnConditionalRendering"
import LearnMap from "./components/LearnMap"
import LearnInlineCSS from "./components/LearnInlineCSS"
import LearnLoadingImages from "./components/LearnLoadingImages"
import LearnForms from "./components/LearnForms"

const BrandContext = createContext()
const UserContext = createContext()

function App() {

  // let price = 500

  // const getBrand = (data) => {
  //   console.log(data);
  // }

  // let brand = "Tesla"

  // const [user, setUser] = useState({name: "King", isLoggedIn: "Yes"})

  return (
    <>
      <h1>Start</h1>

      {/* <Wagwan />

      <LearninJSX />

      <LearnProps model="Toyota" price={price} /> */}

      {/* <LearnEvents />

      <LearninLiftingStates getBrand={getBrand} /> */}

      {/* <LearnUseState />

      <CounterApp /> */}

      {/* <LearnUseEffect />

      <LearnUseMemo /> */}
      
      {/* <BrandContext.Provider value={{ brand, price }}>
        <UserContext.Provider value={{ user, setUser }}>
          <ChildA />
        </UserContext.Provider>
      </BrandContext.Provider> */}

      {/* <LearnUseRef />

      <LearnCustomHooks /> */}

      {/* <LearnConditionalRendering />

      <LearnMap /> */}

      {/* <LearnInlineCSS />

      <LearnLoadingImages /> */}

      <LearnForms />

    </>
  )
}

export default App
export { BrandContext, UserContext }
