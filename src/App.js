import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

import router from './router';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="links">
          <div className='left'>
            <Link to="/">Daervyn</Link>
          </div>
          <div className='right'>
            <Link to="/">home</Link>
          </div>
        </div>
      </header>
      {router}
    </div>
  );
}

export default App;
