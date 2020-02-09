import React from 'react';
import './Main.css';
import Message from '../message/Message';
import Conversation from '../conversation/Conversation';

const Main = () => (
  <main className="main">
    <h1>Conversations</h1>

    <section className="main__body">
      <Conversation />

      <Message />
    </section>
  </main>
);

export default Main;
