import React, { useRef } from 'react';
import './MessageSection.css';
import MessageItem from './../../components/message-item/MessageItem';
import attachment from '../../assets/imgs/attachment.svg';

const MessageSection = ({
  messages, toggleDisplay, setSelectedMessageId, selectedConversation: {
  sender, id, title, body, time,
} }) => {
  const messageCompose = useRef(null);

  const onMessageReplyClick = () => {
    messageCompose.current.focus();
  };

  return (
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
          onMessageReplyClick={() => onMessageReplyClick()}
        />
      ))}

      <div className="message__compose">
        <textarea
          ref={messageCompose}
          name="message"placeholder="Type a messages…"
        />

        <label htmlFor="m-compose">
          <img src={attachment} alt="attachment"/>
        </label>
        <input type="file" name="m-compose" id="m-compose"/>
      </div>
    </div>
  );
}

export default MessageSection;
