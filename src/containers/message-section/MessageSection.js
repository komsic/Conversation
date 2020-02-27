import React, { useRef, useState, useContext } from 'react';
import './MessageSection.css';
import MessageItem from '../../components/message-item/MessageItem';
import attachment from '../../assets/imgs/attachment.svg';
import ServiceContext from '../../ServiceContext';

const MessageSection = ({
  messages, setMessageList, conversationId, toggleDisplay, setSelectedMessageId,
  selectedConversation: {
    sender, id, title, body, time,
  },
}) => {
  const [message, setMessage] = useState('');
  const [fileName, setFileName] = useState('');
  const messageCompose = useRef(null);
  const fileInput = useRef(null);
  const service = useContext(ServiceContext);

  const onMessageReplyClick = () => {
    messageCompose.current.focus();
  };

  const handleFileInput = ({ target: { files } }) => {
    if (files.length > 0) {
      setFileName(files[0].name);
    }
  };

  const handleNewMessage = (event) => {
    event.preventDefault();

    const now = new Date();
    const minute = now.getMinutes();
    let hour = now.getHours();
    let ampm = 'AM';
    if (hour > 12) {
      ampm = 'PM';
      hour -= 12;
    } else if (hour === 0) {
      hour = 12;
    }

    const messageToBeAdded = {
      parentId: conversationId,
      author: 'Jack Dow',
      body: message,
      time: `${hour <= 9 ? 0 : ''}${hour}:${minute <= 9 ? 0 : ''}${minute} ${ampm}`,
    };
    const file = fileInput.current.files[0];
    if (file) {
      messageToBeAdded.file = file;
    }

    const newMessage = service.addComment(messageToBeAdded);
    setMessageList([...messages, newMessage]);

    setMessage('');
    setFileName('');
    fileInput.current.value = null;
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
      }, ...messages].map(({
        id: mId, author, body: b, time: t, receipt, main,
      }, index) => (
        <MessageItem
          key={mId}
          author={author}
          body={b}
          time={t}
          receipt={receipt}
          main={main}
          tabIndex={index}
          onClick={() => setSelectedMessageId(mId)}
          onMessageReplyClick={() => onMessageReplyClick()}
        />
      ))}

      <form className="message__compose" onSubmit={handleNewMessage}>
        <textarea
          ref={messageCompose}
          name="message"
          placeholder="Type a messages…"
          value={message}
          onChange={({ target: { value } }) => setMessage(value)}
          required
        />

        <label htmlFor="m-compose">
          <img src={attachment} alt="attachment" />
          <span>{fileName.substring(0, 25)}</span>
        </label>
        <input
          type="file"
          name="m-compose"
          id="m-compose"
          ref={fileInput}
          onChange={handleFileInput}
        />

        <input type="submit" value="Send" className="message__send" />
      </form>
    </div>
  );
};

export default MessageSection;
