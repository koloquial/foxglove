import React, { useRef, useState } from 'react';

//Style
import { Alert, Card, Form, Button } from 'react-bootstrap';

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
    <Card>
      <Card.Header>Create an Account</Card.Header>
      <Card.Body>
        {error && <Alert variant='danger'>{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group id='email'>
            <Form.Label>Email</Form.Label>
            <Form.Control type='email' ref={emailRef} required />
          </Form.Group>
          <br />
          <Form.Group id='password'>
            <Form.Label>Password</Form.Label>
            <Form.Control type='password' ref={passwordRef} required />
          </Form.Group>
          <br />
          <Form.Group id='passwordConfirm'>
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type='password' ref={passwordConfirmRef} required />
          </Form.Group>
          <br />
          <Button type='submit' disabled={loading}>Sign Up</Button>
        </Form>
      </Card.Body>
    </Card>
  )

}

export default Signup;