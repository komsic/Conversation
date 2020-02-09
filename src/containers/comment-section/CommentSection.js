import React from 'react';
import './CommentSection.css';
import profileLogo from '../../assets/imgs/komsic.jpg';
import paperPlane from '../../assets/imgs/paper-plane.svg';
import CommentItem from './../../components/comment-item/CommentItem';

const comments = [
  {
    id: 'e2683451-f328-4cfd-9838-34ece3abb8d8',
    image: profileLogo,
    body: 'Having a baby can be a nerve wracking experience for new parents – not the nine months of pregnancy.',
  },
  {
    id: 'affb4c99-e4c6-429c-9dde-9eebf4760825',
    image: profileLogo,
    body: 'Having a baby can be a nerve wracking experience for new parents – not the nine months of pregnancy.',
  },
  {
    id: 'd5227a1a-3cf2-44ed-a673-2b958b0bcaf8',
    image: profileLogo,
    body: 'Having a baby can be a nerve wracking experience for new parents – not the nine months of pregnancy.',
  },
  {
    id: '55a7959d-10a4-4f78-a0c2-a9295035337c',
    image: profileLogo,
    body: 'Having a baby can be a nerve wracking experience for new parents – not the nine months of pregnancy.',
  },
  {
    id: 'f36adf02-9815-4e3a-a4ac-081d58db6796',
    image: profileLogo,
    body: 'Having a baby can be a nerve wracking experience for new parents – not the nine months of pregnancy.',
  },
];

const CommentSection = () => (
  <div className="comment-list">
    <h5>Comments</h5>

    {(comments || []).map(({ id, image, body }) => (
      <CommentItem
        key={id}
        image={image}
        body={body}
      />
    ))}

    <div className="comment-compose">
      <img src={profileLogo} alt="profile" />

      <div>
        <input type="text" name="comment" placeholder="Write your comment…"/>

        <div><img src={paperPlane} alt="send" /></div>
      </div>
    </div>
  </div>
);

export default CommentSection;
