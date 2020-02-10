import React, { useState, useContext, useEffect } from 'react';
import './CommentSection.css';
import profileLogo from '../../assets/imgs/komsic.jpg';
import paperPlane from '../../assets/imgs/paper-plane.svg';
import CommentItem from './../../components/comment-item/CommentItem';
import ServiceContext from '../../ServiceContext';

const CommentSection = ({ selectedMessageId }) => {
  const [comments, setComments] = useState([]);
  const service = useContext(ServiceContext);

  useEffect(() => {
    setComments([...service.getMessageComments(selectedMessageId)]);
  }, [service, setComments, selectedMessageId]);

  return (
    <div className="comment-list">
      <h5>Comments</h5>

      {comments.map(({ id, image, body }) => (
        <CommentItem
          key={id}
          image={image}
          body={body}
        />
      ))}

      {(comments.length === 0) && <div className="comment-item">No comment has been added yet</div>}

      <div className="comment-compose">
        <img src={profileLogo} alt="profile" />

        <div>
          <input type="text" name="comment" placeholder="Write your comment…"/>

          <div><img src={paperPlane} alt="send" /></div>
        </div>
      </div>
    </div>
  );
};

export default CommentSection;
