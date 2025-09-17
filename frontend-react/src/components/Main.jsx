import Button from "./Button"

const Main = () => {
  return (
      <>
          <div className="container">
              <div className="p-5 text-center bg-light-dark rounded">
                  <h1 className="text-light">Practice Portal Site</h1>
                  <p className="text-light lead">
                      Just a practice portal set, nothing too serious. But hey, still an important part of the learning process for sure.
                  </p>
                  <Button text='Login' class="btn-outline-info" />
              </div>
          </div>
      </>
  )
}

export default Main
