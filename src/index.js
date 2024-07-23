
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Login from './pages/Login';
import AdminDashboard from './pages/AdminDashboard';
import ManufacturerDashboard from './pages/ManufacturerDashboard';
import DistributorDashboard from './pages/DistributorDashboard';
import RetailerDashboard from './pages/RetailerDashboard';
import ConsumerPage from './pages/ConsumerPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'; // Import your custom CSS


ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Container>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/manufacturer" element={<ManufacturerDashboard />} />
        <Route path="/distributor" element={<DistributorDashboard />} />
        <Route path="/retailer" element={<RetailerDashboard />} />
        <Route path="/consumer" element={<ConsumerPage />} />
      </Routes>
    </Container>
  </Router>
);
