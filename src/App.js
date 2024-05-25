import React, { useState } from 'react';
import Input from './Input';
import Button from './Button';
import Table from './Table';
import './App.css';

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [data, setData] = useState([]);

  const handleAddData = () => {
    if (inputValue.trim()) {
      setData([...data, { name: inputValue }]);
      setInputValue('');
    }
  };

  return (
    <div className="App">
      <h1>Dynamic Components Example</h1>
      <Input value={inputValue} onChange={setInputValue} />
      <Button onClick={handleAddData}>Add</Button>
      <Table data={data} />
    </div>
  );
};

export default App;