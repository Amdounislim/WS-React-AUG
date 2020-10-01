import React from 'react';
import './App.css';
import Nav from './components/Nav'
import Main from './components/Main'
import Footer from './components/Footer'
import Content from './components/Content/Content'

function App() {
  return (
    <div className="App">
      <Nav />
      <Main />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
