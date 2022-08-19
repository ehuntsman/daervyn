import "./styles/app.css";
import React, { useEffect } from 'react';

import router from './router';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="App">
      <Header />
      {router}
      <Footer />
    </div>
  );
}

export default App;
