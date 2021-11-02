import React from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Servises from './components/Servises';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Servises />
    </div>
  );
}

export default App;
