import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './header/header';
import Footer from './footer/footer';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <BrowserRouter>
        <Header></Header>
        <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
