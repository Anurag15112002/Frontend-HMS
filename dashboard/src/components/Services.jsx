import React, { useState } from 'react';
import axios from 'axios'; // You can use axios or fetch for HTTP requests


const Services = () => {
  const [file, setFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState('');

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async (event) => {
    event.preventDefault();

    if (!file) {
      setUploadStatus('No file selected');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setUploadStatus('File uploaded successfully');
    } catch (error) {
      console.error('Error uploading file:', error);
      setUploadStatus('Error uploading file');
    }
  };

  return (
    <div className='app-container'>
      <div className='box1'>
      <h1>Upload Report</h1>
      <img src="dirimg.png" alt="" />
      <form onSubmit={handleUpload} className='upload-form'>
        <input
          type='file'
          accept='.pdf'
          onChange={handleFileChange}
        />
        <button type='submit'>Upload PDF</button>
      </form>
      <p>{uploadStatus}</p>
      </div>
      <div className='box2'>
        <h1>service 2</h1>
      </div>
      <div className='box3'>
        <h1>service 3</h1>
      </div>
    </div>
  );
};

export default Services;
