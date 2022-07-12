import React, { useRef, useState } from 'react';

//Style
import { Alert, Card, Form, Button, Row, Col } from 'react-bootstrap';

//Authentication
import { useAuth } from '../../../../authentication/AuthContext';

//Navigation
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const { login } = useAuth();

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      setError('');
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      navigate('/');
    } catch {
      setError('failed to log in. try again.');
    }
    setLoading(false)
  }

  return (
    <div className='card'>
      <Form onSubmit={handleSubmit}>

        <p className='interface-text head'>
          | login via aftid
          {error ? <p className='interface-text error'><br /> > {error}</p> : <></>}
        </p>

        <Form.Group id='email'>
          <Form.Control className='input' type='email' ref={emailRef} placeholder={'Email'} required />
        </Form.Group>

        <Form.Group id='password'>
          <Form.Control className='input' type='password' ref={passwordRef} placeholder={'Password'} required />
        </Form.Group>

        <Button className='button' type='submit' disabled={loading}>Log In</Button>

      </Form>
    </div>
  )
}

export default Login;