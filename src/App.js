import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

import router from './router';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Link to="/">Daervyn Information</Link>
      </header>
      {router}
    </div>
  );
}

export default App;
