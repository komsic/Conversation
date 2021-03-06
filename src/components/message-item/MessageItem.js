import React from 'react';
import './MessageItem.css';
import reply from '../../assets/imgs/reply.svg';

const MessageItem = ({
  author, body, time, receipt, main, onClick, tabIndex, onMessageReplyClick,
}) => (
  <div className="message__item" onClick={onClick} tabIndex={tabIndex} role="listitem">
    <div className="m-header">
      <h6>{author}</h6>

      {main && (
        <div onClick={onMessageReplyClick} tabIndex={0} role="button">
          <img src={reply} alt="reply" />
          Reply this conversation
        </div>
      )}
    </div>

    <p className={`m-body ${main ? 'm-main-body' : ''}`}>{body}</p>

    <div className="m-footer">
      <p className={`m-time ${main ? 'm-main-time' : ''}`}>{time}</p>

      {!main && (
        <p className={`m-receipt ${receipt || ''}`}>
          <span>&#10003;</span>
          <span>&#10003;</span>
        </p>
      )}
    </div>
  </div>
);

export default MessageItem;
