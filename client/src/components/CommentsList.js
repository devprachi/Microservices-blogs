import React from "react";

const CommentsList = ({ comments }) => {
  const renderComments = comments.map((comment) => (
    <li key={comment.id}>{comment.content}</li>
  ));
  return <ul>{renderComments}</ul>;
};

export default CommentsList;
