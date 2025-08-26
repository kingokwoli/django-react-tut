import { useState } from "react"


const LearnConditionalRendering = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [status, setStatus] = useState(true);

  return (
      <>
          <h1>Conditional Rendering</h1>

          {isLoggedIn ? (
              <h2>Welcome Lad, Wagwan!</h2>
          ) : (
                  <h2>Kindly Login Lad!</h2>
          )}

          {status && (
              <h2>Mask Off</h2>
          )}
      
      </>
  )
}

export default LearnConditionalRendering
