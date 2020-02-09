import React from 'react';
import './App.css';
import Header from './header/Header';
import Nav from './nav/Nav';

function App() {
  return (
    <div className="App">
      <Header />

      <section className="aside-main">
        <Nav />
      </section>
    </div>
  );
};

export default App;
