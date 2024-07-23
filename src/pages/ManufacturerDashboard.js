import React from 'react';
import { Button, Container, ButtonGroup } from 'react-bootstrap';


const ManufacturerDashboard = () => {
  return (
    <Container className="d-flex align-items-center justify-content-center min-vh-100">
      <div className="dashboard-container bg-white shadow p-4 rounded">
        <h2 className="text-center mb-4">Manufacturer Dashboard</h2>
        <ButtonGroup vertical className="d-flex w-100">
          <Button variant="primary" className="mb-2">Add Product</Button>
          <Button variant="secondary" className="mb-2">Check Profile</Button>
          <Button variant="warning" className="mb-2">Connect Wallet</Button>
          <Button variant="danger">Logout</Button>
        </ButtonGroup>
      </div>
    </Container>
  );
};

export default ManufacturerDashboard;
