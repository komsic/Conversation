import { v4 as uuid } from 'uuid';
import data from './data';

class Service {
  constructor() {
    this.data = data;
  }

  getConservations(filter) {
    if (!filter) return this.data.conversions;

    return this.data.conversations.filter(({ filter: f }) => filter === f);
  }

  getConversationMessages(conversationId) {
    if (!conversationId) return [];
    this.data = {
      ...this.data,
      conversations: this.data.conversations.map((c) => {
        const { id } = c;
        if (id === conversationId) {
          return {
            ...c,
            newNotification: 0,
          };
        }

        return c;
      }),
    };

    return this.data.messages.filter(({ parentId }) => parentId === conversationId);
  }

  getMessageComments(messageId) {
    if (!messageId) return [];
    return this.data.comments.filter(({ parentId }) => parentId === messageId);
  }

  getOrganizationName() {
    return this.data.organizationName;
  }

  addComment(comment) {
    const newComment = { ...comment, id: uuid() };
    this.data.comments.push(newComment);

    return newComment;
  }

  addMessage(message) {
    const newMessage = { ...message, id: uuid() };
    this.data.messages.push(newMessage);

    return newMessage;
  }
}

export default Service;
