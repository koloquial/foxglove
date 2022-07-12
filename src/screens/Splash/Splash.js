import React, { useState } from 'react';

//Components
import Signup from './components/Signup';
import Login from './components/Login';
import ForgotPassword from './components/ForgotPassword';

//Styles
import { Row, Col, Container } from 'react-bootstrap';

const Splash = () => {
  const [active, setActive] = useState('login');

  const handle = (view) => {
    setActive(view)
  }

  return (
    <Container>
      <div className='vertical-center'>

        <Row>
          <Col xl={12}>
            <center>
              <h1 className='title'>Foxglove</h1>
              <br /><br />
            </center>
          </Col>

          <Col xl={12}>
            {active === 'login' ?
              (<Row>
                <Col xl={12}>
                  <center>
                    <Login />
                    <p><a href='#' onClick={() => handle('signup')}>Create an AFTid</a></p>
                    <p>&nbsp; &nbsp; • &nbsp;&nbsp;</p>
                    <p><a href='#' onClick={() => handle('forgot')}>Forgot password?</a></p>
                  </center>
                </Col>
              </Row>
              ) : (<></>)}

            {active === 'signup' ?
              (<Row>
                <Col xl={12}>
                  <center>
                    <Signup />
                    <p><a href='#' onClick={() => handle('login')}>Log in</a></p>
                    <p>&nbsp; &nbsp; • &nbsp;&nbsp;</p>
                    <p><a href='#' onClick={() => handle('forgot')}>Forgot password?</a></p>
                  </center>
                </Col>
              </Row>
              ) : (<></>)}

            {active === 'forgot' ?
              (<Row>
                <Col xl={12}>
                  <center>
                    <ForgotPassword />
                    <p><a href='#' onClick={() => handle('login')}>Log in</a></p>
                    <p>&nbsp; &nbsp; • &nbsp;&nbsp;</p>
                    <p><a href='#' onClick={() => handle('signup')}>Create an AFTid</a></p>
                  </center>
                </Col>
              </Row>
              ) : (<></>)}
          </Col>
        </Row>
      </div>
    </Container>
  )
}

export default Splash