import { useContext } from 'react'
import { BrandContext, UserContext } from '../App'

const ChildC = () => {
  const brandData = useContext(BrandContext)
  const userData = useContext(UserContext)

  return (
      <>
            {/* <BrandContext.Consumer>
              {
                  ({ brand, price }) => {
                      return (
                        <UserContext.Consumer>
                          {
                            ({user}) => {
                              return(
                                <>
                                  <h2>User: {user.name} </h2>
                                  <h2>Is Logged In: {user.isLoggedIn} </h2>
                                  <h2>ChildC - {brand} : ${price} </h2>
                                 </>
                              )
                            }
                          }
                        </UserContext.Consumer>
                      )
                  }
              }
            </BrandContext.Consumer> */}
      
        <h2>User: {userData.user.name} </h2>
        <h2>Is Logged In?: {userData.user.isLoggedIn} </h2>
        <h2>ChildC - {brandData.brand} </h2>
      </>
  )
}

export default ChildC
