import '../assets/css/style.css'

const LearnInlineCSS = () => {
    const style = {
        container: {
            backgroundColor: 'red',
            height: '100px',
            width: '100px'
        },

        h2Text: {
            fontSize: '40px',
            color: '#00ff00'
        }
    }
  return (
      <>
          <style>
              {`
                .container{
                    background-color: blue;
                    height: 100px;
                    width: 100px;
                }
              `}
          </style>
          <p style={{ fontSize: '20px', fontWeight: 700, color: 'red' }}>Sample Paragraph This One.</p>
          
          <div style={style.container}></div>

          <h2 style={style.h2Text}>Sample Sub Heading This One</h2>
          <hr />

          <h2>Internal CSS</h2>

          <div className="container"></div>

          <h2>External CSS</h2>

          <div className="goldbox"></div>

          <h2 className="goldtext">Gold Text</h2>
      </>
  )
}

export default LearnInlineCSS
