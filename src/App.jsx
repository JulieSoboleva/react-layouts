import React from 'react';
import './App.css';
import json from './data/products.json';
import Store from './components/Store/Store';

export default function App() {
  
  return (
    <div className='App'>
      <Store products={json}/>
    </div>
  );
}
