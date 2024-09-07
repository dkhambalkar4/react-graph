

    import React, { useState } from 'react';
    import { Form, Button,  } from 'react-bootstrap';
    import { useNavigate } from 'react-router-dom';
    import '../styles/Login.css';
    
    function Login() {
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const [errors, setErrors] = useState({});
      const navigate = useNavigate();
    
      const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = {};
    
        // Validate email
        if (!email) {
          validationErrors.email = 'This value is required.';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
          validationErrors.email = 'Please enter a valid email address.';
        }
    
        // Validate password
        if (!password) {
          validationErrors.password = 'This value is required.';
        }
    
        setErrors(validationErrors);
    
        // If no errors, proceed with login logic
        if (Object.keys(validationErrors).length === 0) {
          // Perform login logic here
          navigate('/graph-form');
        }
      };
    
      return (
        <div className="login-container width-100%">
          <h2>Login</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formEmail">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                isInvalid={!!errors.email}
              />
              {errors.email && <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>}
            </Form.Group>
    
            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                isInvalid={!!errors.password}
              />
              {errors.password && <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>}
            </Form.Group>
    
            <p variant="link" className="forgot-password">Forgot Password
            </p>
    
            <Button variant="dark" type="submit" className="login-button">
              Log in
            </Button>
          </Form>
        </div>
      );
    }
    
    export default Login;
    