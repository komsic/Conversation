import React from 'react';
import './Message.css';
import clock from '../../assets/imgs/clock.svg';
import deleteLogo from '../../assets/imgs/delete.svg';
import archive from '../../assets/imgs/archive.svg';
import more from '../../assets/imgs/more.svg';
import profileLogo from '../../assets/imgs/komsic.jpg';
import MessageSection from '../message-section/MessageSection';

const Message = () => (
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
      <MessageSection />
    </section>
  </section>
);

export default Message;
