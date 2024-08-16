import React, { useState } from 'react';

const UploadPdfComponent = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [pdfUrl, setPdfUrl] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (selectedFile) {
      const fileReader = new FileReader();
      fileReader.onload = () => {
        const pdfBase64 = fileReader.result;
        setPdfUrl(pdfBase64);
      };
      fileReader.readAsDataURL(selectedFile);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload PDF</button>
      {pdfUrl && (
        <embed
          src={pdfUrl}
          type="application/pdf"
          width="100%"
          height="500px"
        />
      )}
    </div>
  );
};

export default UploadPdfComponent;