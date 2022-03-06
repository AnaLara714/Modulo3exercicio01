import React, { useEffect, useState } from 'react';
import Header from '../containers/header/Header';
import Footer from '../containers/footer/Footer';
import Section from '../containers/section/Section';
import Search from '../components/Research/Research';
import api from '../_config/api';
import './App.css';

const App = () => {
  
  return (
    <div className="App">
      <Header></Header>
      <Section><Search /></Section>
      <Footer/>
    </div>
  );
}

export default App;
