import React from 'react';
import './Main.css';
import Conversation from '../conversation/Conversation';

const Main = () => (
  <main className="main">
    <h1>Conversations</h1>

    <section className="main__body">
      <Conversation />
    </section>
  </main>
);

export default Main;
