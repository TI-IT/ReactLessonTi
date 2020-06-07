import React from 'react';
import './App.css';
import Header from './components/Navbar';
import Navbar from './components/Navbar';
import Profile from './components/Profile';




const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <Profile />
      <div>9999</div>
    </div>
  );
}

export default App;
