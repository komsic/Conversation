import React from 'react';
import './Conversation.css';
import ConversationItem from './../../components/conversation-item/ConversationItem';

const conversations = [
  {
    type: 'twitter',
    sender: 'Zarela Reed',
    id: '7c653e08-687e-42f2-9c5b-b9a6e9ae67e2',
    title: 'Used Electronic Test Equipment Not Wor…',
    body: 'Hello guys, I have been unable to make use of',
    time: '19hrs',
    haveAttachment: false,
    newNotification: 2,
  },
  {
    type: 'twitter',
    sender: 'Zarela Reed',
    id: 'fac6488d-228c-45a3-89ac-f9bb1b636003',
    title: 'Used Electronic Test Equipment Not Wor…',
    body: 'Hello guys, I have been unable to make use of',
    time: '19hrs',
    haveAttachment: true,
    newNotification: 0,
  },
  {
    type: 'twitter',
    sender: 'Zarela Reed',
    id: '63d84fc9-ad36-472c-bbd6-a5de8bb3a606',
    title: 'Used Electronic Test Equipment Not Wor…',
    body: 'Hello guys, I have been unable to make use of',
    time: '19hrs',
    haveAttachment: true,
    newNotification: 0,
  },
  {
    type: 'twitter',
    sender: 'Zarela Reed',
    id: '9b9301f1-6ac2-4317-b2fa-663a7cd4de8f',
    title: 'Used Electronic Test Equipment Not Wor…',
    body: 'Hello guys, I have been unable to make use of',
    time: '19hrs',
    haveAttachment: false,
    newNotification: 0,
  },
  {
    type: 'twitter',
    sender: 'Zarela Reed',
    id: '41324939-8287-4c52-8924-b4666ea255ad',
    title: 'Used Electronic Test Equipment Not Wor…',
    body: 'Hello guys, I have been unable to make use of',
    time: '19hrs',
    haveAttachment: false,
    newNotification: 0,
  },
];

const Conversation = () => (
  <section className="main__conversations">
    <section className="filter-controls">
      <button type="button" className="filter-controls-item active">Open</button>
      <button type="button" className="filter-controls-item">Archived</button>
      <button type="button" className="filter-controls-item">Snoozed</button>
      <button type="button" className="filter-controls-item">Trash</button>
    </section>

    <section className="conversations">
      {(conversations || []).map(({ type, sender, id, title, body, time, haveAttachment, newNotification }) => (
        <ConversationItem
          key={id}
          type={type}
          sender={sender}
          title={title}
          body={body}
          time={time}
          haveAttachment={haveAttachment}
          newNotification={newNotification}
        />
      ))}
    </section>
  </section>
);

export default Conversation;
