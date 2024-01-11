// App.js
import React, { useState } from 'react';
import FileInput from './FileInput';
import DataDisplay from './DataDisplay';
import DocumentReader from './DocumentReader';
import * as XLSX from 'xlsx';

const App = () => {
  const [data, setData] = useState(null);

  const handleFileChange = (file) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      const workbook = XLSX.read(e.target.result, { type: 'binary' });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const excelData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
      setData(excelData);
    };

    reader.readAsBinaryString(file);
  };

  return (
    <div>
      <FileInput onFileChange={handleFileChange} />
      {data && <DataDisplay data={data} />}
      <h1>Choose doc file to display data</h1>
      <DocumentReader />
    </div>
  );
};

export default App;
