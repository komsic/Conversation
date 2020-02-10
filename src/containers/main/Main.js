import React, { useState } from 'react';
import './Main.css';
import Message from '../message/Message';
import Conversation from '../conversation/Conversation';

const Main = () => {
  const [selectedConversation, setSelectedConversation] = useState({
    sender: '', id: '', title: '', body: '', time: '',
  });

  return (
    <main className="main">
      <h1>Conversations</h1>

      <section className="main__body">
        <Conversation setSelectedConversation={setSelectedConversation} />

        <Message selectedConversation={selectedConversation}/>
      </section>
    </main>
  );
};

export default Main;
