import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss'
// import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div> 
      <Header></Header>
      <Shop></Shop>
    </div>
  );
}

export default App;
