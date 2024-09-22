import axios from 'axios';
import { useState, useEffect } from 'react';
import  './Services.css';

const Services = () => {
  const [files, setFiles] = useState([]); // Default as an empty array
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const response = await axios.get('/api/files'); // Replace with your endpoint
        
        // Ensure the response data is an array, if not, fallback to an empty array
        const filesData = Array.isArray(response.data) ? response.data : [];
        
        setFiles(filesData); // Set the fetched data (or empty array)
      } catch (err) {
        console.error('Error fetching files:', err);
        setError('Failed to load files.');
      }
    };

    fetchFiles();
  }, []);

  return (
    <div className='dashboard-container'>
      <h1>Uploaded Files</h1>
      {error && <p>{error}</p>}
      <ul>
        {/* Ensure that `files` is always an array before mapping */}
        {files.length > 0 ? (
          files.map((file) => (
            <li key={file.name}>
              <a href={file.url} target="_blank" rel="noopener noreferrer">
                {file.name}
              </a>
              <button onClick={() => window.open(file.url, '_blank')}>
                View PDF
              </button>
              <a href={file.url} download>
                Download
              </a>
            </li>
          ))
        ) : (
          <p>No files available</p>
        )}
      </ul>
    </div>
  );
};

export default Services;
