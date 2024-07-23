import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap';
import '../css/login.css'; // Import your custom CSS

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (role) => {
    switch (role) {
      case 'admin':
        navigate('/admin');
        break;
      case 'manufacturer':
        navigate('/manufacturer');
        break;
      case 'distributor':
        navigate('/distributor');
        break;
      case 'retailer':
        navigate('/retailer');
        break;
      case 'consumer':
        navigate('/consumer');
        break;
      default:
        break;
    }
  };

  return (
    <Container className="login-container">
      <h2 className="login-title text-center mb-4">Welcome to Authentic8!</h2>
      <Form>
        <Form.Group controlId="username" className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Enter username" />
        </Form.Group>
        <Form.Group controlId="password" className="mb-4">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter password" />
        </Form.Group>
        <div className="d-grid gap-2">
          <Button variant="custom" onClick={() => handleLogin('admin')}>Login as Admin</Button>
          <Button variant="custom" onClick={() => handleLogin('manufacturer')}>Login as Manufacturer</Button>
          <Button variant="custom" onClick={() => handleLogin('distributor')}>Login as Distributor</Button>
          <Button variant="custom" onClick={() => handleLogin('retailer')}>Login as Retailer</Button>
          <Button variant="custom" onClick={() => handleLogin('consumer')}>Login as Consumer</Button>
        </div>
      </Form>
    </Container>
  );
};

export default Login;
