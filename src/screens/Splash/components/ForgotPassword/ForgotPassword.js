import React, { useRef, useState } from 'react';

//Style
import { Alert, Card, Form, Button } from 'react-bootstrap';

//Authentication
import { useAuth } from '../../../../authentication/AuthContext';

const ForgotPassword = () => {
  const emailRef = useRef();

  const { resetPassword } = useAuth();

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      setError('');
      setMessage('');
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage('Check your inbox for further instructions');
    } catch {
      setError('Failed to reset password');
    }

    setLoading(false)
  }

  return (
    <>
      <Card>
        <Card.Header>Password Reset</Card.Header>
        <Card.Body>
          {error && <Alert variant='danger'>{error}</Alert>}
          {message && <Alert variant='success'>{message}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id='email'>
              <Form.Label>Email</Form.Label>
              <Form.Control type='email' ref={emailRef} required />
            </Form.Group>
            <br />
            <Button type='submit' disabled={loading}>Reset Password</Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  )

}

export default ForgotPassword;