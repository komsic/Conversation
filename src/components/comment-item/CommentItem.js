import React from 'react';
import './CommentItem.css';

const CommentItem = ({ image, body }) => (
  <div className="comment-item">
    <img src={image} alt="profile" />

    <p>{body}</p>
  </div>
);

export default CommentItem;
