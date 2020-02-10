import React from 'react';
import './MessageSection.css';
import MessageItem from './../../components/message-item/MessageItem';
import attachment from '../../assets/imgs/attachment.svg';

const MessageSection = ({
  messages, toggleDisplay, setSelectedMessageId, selectedConversation: {
  sender, id, title, body, time,
} }) => (
  <div className={`message-list ${!toggleDisplay ? 'close' : ''}`}>
    <h5>{title}</h5>

    {[{
      body,
      id,
      time,
      author: sender,
      main: true,
    }, ...messages].map(({ id: mId, author, body, time, receipt, main }, index) => (
      <MessageItem
        key={mId}
        author={author}
        body={body}
        time={time}
        receipt={receipt}
        main={main}
        tabIndex={index}
        onClick={() => setSelectedMessageId(mId)}
      />
    ))}

    <div className="message__compose">
      <textarea name="message" placeholder="Type a messages…" />

      <img src={attachment} alt="attachment"/>
    </div>
  </div>
);

export default MessageSection;
