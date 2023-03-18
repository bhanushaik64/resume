import React from 'react';
import './App.css';

import Tempresume from './components/Tempresume';
import Form from './components/Form';
import Header from './components/Header';

function App() {
  return (
    <div>
      <Header/>
      <Form/>
      <Tempresume/>
    </div>
  );
}

export default App;
