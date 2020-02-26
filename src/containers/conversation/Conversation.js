import React, { useState, useContext, useEffect } from 'react';
import './Conversation.css';
import ConversationItem from '../../components/conversation-item/ConversationItem';
import ServiceContext from '../../ServiceContext';

const Conversation = ({
  setSelectedConversation, sStatus, mStatus, selectedConversation,
}) => {
  const [conversations, setConversations] = useState([]);
  const [filter, setFilter] = useState('open');
  const service = useContext(ServiceContext);

  useEffect(() => {
    const cons = [...service.getConservations(filter)];
    setConversations(cons);
    if (!selectedConversation.id) setSelectedConversation(cons[0]);
  }, [setConversations, service, filter, setSelectedConversation, selectedConversation]);

  const handleFilterControlClick = (name) => {
    setFilter(name);
  };

  const filterControls = ['Open', 'Archived', 'Snoozed', 'Trash'];
  return (
    <section
      className={`main__conversations ${sStatus ? 'close' : ''} ${mStatus ? '' : 'm-close'}`}
    >
      <section className="filter-controls">
        {filterControls.map((name) => (
          <button
            type="button"
            className={`filter-controls-item ${(name.toLowerCase() === filter) ? 'active' : ''}`}
            onClick={() => handleFilterControlClick(name.toLowerCase())}
            key={name}
          >
            {name}
          </button>
        ))}
      </section>

      <section className="conversations">
        {conversations.map(({
          type, sender, id, title, body, time, haveAttachment, newNotification,
        }, index) => (
          <ConversationItem
            onClick={() => setSelectedConversation(conversations[index], true)}
            key={id}
            tabIndex={index}
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
};

export default Conversation;
