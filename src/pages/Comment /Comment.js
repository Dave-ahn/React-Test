import React from 'react';

const Comment = ({ comment }) => {
  return (
    <div className>
      <div className="user-commnet">{comment}</div>
    </div>
  );
};

export default Comment;
