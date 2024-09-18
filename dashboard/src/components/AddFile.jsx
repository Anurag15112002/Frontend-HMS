import React, { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlask } from '@fortawesome/free-solid-svg-icons';
import './AdminDashboard.css'; // Assuming you'll create this file for custom styles

const AdminDashboard = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = () => {
    const formData = new FormData();
    formData.append('labReport', file);

    axios.post('http://localhost:4000upload', formData)
      .then(response => {
        alert('File uploaded successfully');
      })
      .catch(error => {
        console.error('Error uploading file:', error);
      });
  };

  return (
    <div className="dashboard">
      <div className="sidebar">
        <FontAwesomeIcon icon={faFlask} size="2x" />
        <h3>Laboratory</h3>
      </div>
      <div className="content">
        <h2>Admin Dashboard</h2>
        <input type="file" onChange={handleFileChange} />
        <button onClick={handleUpload}>Upload PDF</button>
      </div>
    </div>
  );
};

export default AdminDashboard;
