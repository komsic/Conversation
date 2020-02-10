import React, { useState } from 'react';
import './Main.css';
import Message from '../message/Message';
import Conversation from '../conversation/Conversation';
import backArrow from '../../assets/imgs/arrow.svg';

const Main = () => {
  const [selectedConversation, setSelectedConversation] = useState({
    sender: '', id: '', title: '', body: '', time: '',
  });
  const [hideConversation, setHideConversation] = useState(false);
  const [hideComments, setHideComments] = useState(true);

  const handleSelectedConversation = (conversation, isClick) => {
    if (conversation.id !== selectedConversation.id) {
      setSelectedConversation(conversation);
    }
    if (isClick) {
      setHideConversation(true);
    }
  };

  const handleBackButtonClick = () => {
    if (hideComments) {
      setHideConversation(false);
    } else {
      setHideComments(true);
    }
  };

  return (
    <main className="main">
      <div>
        <button
          type="button"
          className={(!hideConversation && hideComments) ? 'hide' : ''}
          onClick={() => handleBackButtonClick()}
        >
          <img src={backArrow} alt="back button"/>
        </button>
        <h1>Conversations</h1>
      </div>

      <section className="main__body">
        <Conversation
          sStatus={hideConversation}
          mStatus={hideComments}
          setSelectedConversation={handleSelectedConversation}
          selectedConversation={selectedConversation}
        />

        <Message
          selectedConversation={selectedConversation}
          status={hideConversation}
          hideComments={hideComments}
          setHideComments={setHideComments}
          setHideConversation={setHideConversation}
        />
      </section>
    </main>
  );
};

export default Main;
