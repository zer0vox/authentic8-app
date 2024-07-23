import React from 'react';
import { Button, Container, ButtonGroup } from 'react-bootstrap';
import '../css/admin.css'; // Import your custom CSS

const AdminDashboard = () => {
  return (
    <Container className="d-flex align-items-center justify-content-center min-vh-100">
      <div className="dashboard-container bg-white shadow p-4 rounded">
        <h2 className="text-teal-800 text-center mb-4">Admin Dashboard</h2>
        <ButtonGroup vertical className="d-flex w-100">
          <Button variant="teal" className="mb-2">Manage Accounts</Button>
          <Button variant="outline-teal" className="mb-2">Add Account</Button>
          <Button variant="danger">Logout</Button>
        </ButtonGroup>
      </div>
    </Container>
  );
};

export default AdminDashboard;
