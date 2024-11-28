import React from "react";

const CommentsList = ({ comments }) => {
  const renderComments = comments.map((comment) => {
    if (comment.status === "rejected") {
      comment.content = "This comment has been rejected.";
    }
    if (comment.status === "pending") {
      comment.content = "This comment is awaiting moderation.";
    }
    return <li key={comment.id}>{comment.content}</li>;
  });
  return <ul>{renderComments}</ul>;
};

export default CommentsList;
