import React, { useEffect, useState, useContext } from 'react';
import './Message.css';
import clock from '../../assets/imgs/clock.svg';
import deleteLogo from '../../assets/imgs/delete.svg';
import archive from '../../assets/imgs/archive.svg';
import more from '../../assets/imgs/more.svg';
import profileLogo from '../../assets/imgs/komsic.jpg';
import MessageSection from '../message-section/MessageSection';
import CommentSection from './../comment-section/CommentSection';
import ServiceContext from './../../ServiceContext';

const Message = ({ selectedConversation }) => {
  const [messages, setMessages] = useState([]);
  const [selectedMessageId, setSelectedMessageId] = useState('');
  const service = useContext(ServiceContext);

  const { id: conversationId } = selectedConversation;

  const handleSelectedMessageId = (mId) => {
    if (mId !== conversationId) setSelectedMessageId(mId);
  };

  useEffect(() => {
    const messes = [...service.getCoversationMessages(conversationId)];
    setMessages(messes);

    if (messes.length > 0) {
      setSelectedMessageId(messes[0].id);
    } else {
      setSelectedMessageId('');
    }
  }, [conversationId, service, setMessages, setSelectedMessageId]);

  return (
    <section className="main__message">
      <section className="message-control">
        <div className="left">
          <button type="button">
            <img src={clock} alt="clock" />
          </button>

          <button type="button">
            <img src={deleteLogo} alt="delete" />
          </button>

          <button type="button">
            <img src={archive} alt="archive" />
          </button>

          <button type="button">
            <img src={more} alt="more" />
          </button>
        </div>

        <div className="right">
          <div className="assign-users">
            <img src={profileLogo} alt="profile" />
            <img src={profileLogo} alt="profile" />
            <img src={profileLogo} alt="profile" />
          </div>

          <p>Assign</p>
          <img src={profileLogo} alt="profile" />
        </div>
      </section>

      <section className="message">
        <MessageSection
          messages={messages}
          selectedConversation={selectedConversation}
          setSelectedMessageId={handleSelectedMessageId}
        />

        <CommentSection selectedMessageId={selectedMessageId} />
      </section>
    </section>
  );
};

export default Message;
