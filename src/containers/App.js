import React from 'react';
import './App.css';
import Header from './header/Header';
import Nav from './nav/Nav';
import Main from './main/Main';

function App() {
  return (
    <div className="App">
      <Header />

      <section className="aside-main">
        <Nav />

        <Main />
      </section>
    </div>
  );
}

export default App;
