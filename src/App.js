import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Hero from './components/Hero';
import Navbar from './components/Navbar';


function App() {
  return (
    <div>
      <Header/>
      <Navbar/>
      <Hero/>
    </div>
  );
}

export default App;
