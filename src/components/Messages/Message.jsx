import React from 'react';
import PropTypes from 'prop-types';

const Message = ({ message }) => {
  return (
    <div className="message">
      <div className="message-author">{message.author}:</div>
      <div className="message-content">{message.content}</div>
    </div>
  );
};

export default Message;

Message.propTypes = {
  message: PropTypes.shape({
    author: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
};
