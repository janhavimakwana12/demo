import React from 'react';

const FileInput = ({ onFileChange }) => {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    onFileChange(file);
  };

  return (
    <div>
      <h1>Choose excel file to display data</h1>
      <input
        type="file"
        id="fileInput"
        accept=".xlsx, .xls"
        onChange={handleFileChange}
      />
    </div>
  );
};

export default FileInput;