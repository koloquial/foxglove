import React, { useRef, useState } from 'react';

//Style
import { Alert, Card, Form, Button, Row, Col } from 'react-bootstrap';

//Authentication
import { useAuth } from '../../../../authentication/AuthContext';

//Navigation
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  const { signup } = useAuth();

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async event => {
    event.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Passwords do not match');
    }

    try {
      setError('');
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
    } catch {
      setError('Failed to create an account');
    }

    navigate('/');
    setLoading(false);
  }

  return (
    <Card className='card'>
      <Card.Body>
        {error && <Alert variant='danger'>{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col xl={2}>
              <h1 className='label'>Create</h1>
            </Col>
            <Col>
              <Form.Group id='email'>
                <Form.Control className='input' type='email' ref={emailRef} placeholder={'Email'} required />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group id='password'>
                <Form.Control className='input' type='password' ref={passwordRef} placeholder={'Password'} required />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group id='passwordConfirm'>
                <Form.Control className='input' type='password' ref={passwordConfirmRef} placeholder={'Retype Password'} required />
              </Form.Group>
            </Col>
            <Col xl={2}>
              <Button className='button' type='submit' disabled={loading}>Log In</Button>
            </Col>
          </Row>
        </Form>
      </Card.Body>
    </Card>
  )

}

export default Signup;