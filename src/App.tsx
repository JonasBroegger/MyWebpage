import Header from './Components/Header/Header'
import './App.scss';
import Button from './Components/Button';
import React from 'react';

function App() {
  function handleCLick(event: React.MouseEvent){
    console.log("I've been clicked", event);
  }

  return (
    <div className="App">
      <Header/>
      <Button onClick={handleCLick}><h1>Test</h1></Button>
    </div>
  );
}

export default App;
