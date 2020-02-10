import uuid from 'uuid/v1';
import data from './data';

class Service {
  constructor() {
    this.data = data;
  }

  getConservations(filter) {
    if (!filter)  return this.data.conversions;

    return this.data.conversations.filter(({ filter: f }) => filter === f);
  }

  getCoversationMessages(conversationId) {
    return this.data.messages.filter(({ parentId }) => parentId === conversationId);
  }

  getMessageComments(messageId) {
    return this.data.comments.filter(({ parentId }) => parentId === messageId);
  }

  getOrganizationName() {
    return this.data.organizationName;
  }

  addComment(comment) {
    this.data.comments.push({ ...comment, id: uuid() });
  }

  addMessage(message) {
    this.data.messages.push({ ...message, id: uuid() });
  }
}

export default Service;
