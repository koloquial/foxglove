import React, { useRef, useState } from 'react';

//Style
import { Alert, Card, Form, Button, Row, Col } from 'react-bootstrap';

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
    <div className='card'>

      {error && <Alert variant='danger'>{error}</Alert>}
      {message && <Alert variant='success'>{message}</Alert>}
      <Form onSubmit={handleSubmit}>

        <p className='interface-text head'>
          | reset password_
        </p>

        <Form.Group id='email'>
          <Form.Control className='input' type='email' ref={emailRef} placeholder={'Email'} required />
        </Form.Group>

        <Button className='button' type='submit' disabled={loading}>Reset</Button>

      </Form>
    </div>
  )

}

export default ForgotPassword;