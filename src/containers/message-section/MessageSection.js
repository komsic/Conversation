import React from 'react';
import './MessageSection.css';
import MessageItem from './../../components/message-item/MessageItem';
import attachment from '../../assets/imgs/attachment.svg';

const messages = [
  {
    id: '3ff147d0-5ea0-4b74-b748-19f0057bbe1b',
    author: 'Zarela Reed',
    body: 'Having a baby can be a nerve wracking experience for new parents – not the nine months of pregnancy, I’m talking about after the infant is brought home from the hospital. It’s always the same thing, by the time they have their third child they have it all figured out, but with number one it’s a learning thing.',
    time: '12:59 PM',
    main: true,
  },
  {
    id: 'd9e1c247-00c0-467c-a12a-64faba4c0ba7',
    author: 'Zarela Reed',
    body: 'Having a baby can be a nerve wracking experience for new parents – not the nine months of pregnancy, I’m talking about after the infant is brought home from the hospital. It’s always the same thing, by the time they have their third child they have it all figured out, but with number one it’s a learning thing.',
    time: '12:59 PM',
    receipt: 'read',
  },
  {
    id: '7cd9c267-4d09-4f15-8625-bbe6769291ff',
    author: 'Zarela Reed',
    body: 'Having a baby can be a nerve wracking experience for new parents – not the nine months of pregnancy, I’m talking about after the infant is brought home from the hospital. It’s always the same thing, by the time they have their third child they have it all figured out, but with number one it’s a learning thing.',
    time: '12:59 PM',
    receipt: 'read',
  },
];

const MessageSection = () => (
  <div className="message-list">
    <h5>WhatsApp for Business: Don't forget to start your free trial</h5>

    {(messages || []).map(({ id, author, body, time, receipt, main }) => (
      <MessageItem
        key={id}
        author={author}
        body={body}
        time={time}
        receipt={receipt}
        main={main}
      />
    ))}

    <div className="message__compose">
      <textarea name="message" placeholder="Type a messages…" />

      <img src={attachment} alt="attachment"/>
    </div>
  </div>
);

export default MessageSection;
