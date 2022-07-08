import React, { useState } from 'react';

//Components
import Signup from './components/Signup';
import Login from './components/Login';
import ForgotPassword from './components/ForgotPassword';

//Styles
import { Container, Row, Col } from 'react-bootstrap';

const Splash = () => {
  const [active, setActive] = useState('login');

  const handle = (view) => {
    setActive(view)
  }

  return (
    <>
      <Container fluid>
        <div className='center'>
          <Row>
            <Col xl={12}>
              <h1>Foxglove</h1>
            </Col>
            <Col xl={12}>
              {active === 'login' ?
                (<>
                  <Row>
                    <Col xl={12}>
                      <div style={{ minWidth: '400px' }}>
                        <Login />
                        <a href='#' onClick={() => handle('signup')}>Create an account</a><br />
                        <a href='#' onClick={() => handle('forgot')}>Forgot password?</a>
                      </div>
                    </Col>
                  </Row>
                </>) : (<></>)}

              {active === 'signup' ?
                (<>
                  <Row>
                    <Col xl={12}>
                      <div style={{ minWidth: '400px' }}>
                        <Signup />
                        <a href='#' onClick={() => handle('login')}>Log in</a><br />
                        <a href='#' onClick={() => handle('forgot')}>Forgot password?</a>
                      </div>
                    </Col>
                  </Row>
                </>) : (<></>)}

              {active === 'forgot' ?
                (<>
                  <Row>
                    <Col xl={12}>
                      <div style={{ minWidth: '400px' }}>
                        <ForgotPassword />
                        <a href='#' onClick={() => handle('login')}>Log in</a><br />
                        <a href='#' onClick={() => handle('signup')}>Create an account</a>
                      </div>
                    </Col>
                  </Row>
                </>) : (<></>)}
            </Col>
          </Row>
        </div>
      </Container>
    </>
  )
}

export default Splash