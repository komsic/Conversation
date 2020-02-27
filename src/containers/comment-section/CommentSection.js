import React, { useState, useContext, useEffect } from 'react';
import './CommentSection.css';
import profileLogo from '../../assets/imgs/komsic.jpg';
import paperPlane from '../../assets/imgs/paper-plane.svg';
import CommentItem from '../../components/comment-item/CommentItem';
import ServiceContext from '../../ServiceContext';

const CommentSection = ({ selectedMessageId, toggleDisplay }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const service = useContext(ServiceContext);

  useEffect(() => {
    setComments([...service.getMessageComments(selectedMessageId)]);
  }, [service, setComments, selectedMessageId]);

  const handleAddNewComment = (event) => {
    event.preventDefault();

    const nc = service.addComment({
      parentId: selectedMessageId,
      image: profileLogo,
      body: newComment,
    });
    setComments([...comments, nc]);

    setNewComment('');
  };

  return (
    <div className={`comment-list ${toggleDisplay ? 'close' : ''}`}>
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

        <form onSubmit={handleAddNewComment}>
          <input
            type="text"
            name="comment"
            placeholder="Write your comment…"
            value={newComment}
            onChange={({ target: { value } }) => setNewComment(value)}
            required
          />

          <button type="submit">
            <img src={paperPlane} alt="send" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default CommentSection;
