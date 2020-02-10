import React from 'react';
import './ConversationItem.css';
import twitterLogo from '../../assets/imgs/twitter.svg';
import whatsappLogo from '../../assets/imgs/whatsapp.svg';
import appleLogo from '../../assets/imgs/apple.svg';
import attachment from '../../assets/imgs/attachment.svg';

const getImageType = (type) => {
  switch (type) {
    case 'twitter':
      return twitterLogo;
    case 'whatsapp':
      return whatsappLogo;
    case 'apple':
      return appleLogo;
    default:
      return twitterLogo;
  };
};

const ConversationItem = ({
  type, sender, title, body, time, haveAttachment, newNotification, tabIndex, onClick,
}) => (
  <div className="conversations__item" tabIndex={tabIndex} onClick={onClick}>
    <img src={getImageType(type)} alt="social"/>

    <div className="conversation__body">
      <h3 className="sender">{sender}</h3>

      <p className="title">{`${title.substring(0, 38)}...`}</p>

      <p className="body">{body}</p>
    </div>

    <div className="conversation__meta">
      <p className="time">{time}</p>

      {newNotification > 0 && <div><span className="notification">{newNotification}</span></div>}

      {haveAttachment && <div><img src={attachment} alt="attachment"/></div>}
    </div>
  </div>
);

export default ConversationItem;
