import React from 'react';
import PropTypes from 'prop-types';

const Message = ({ message }) => {
  return (
    <div className="message">
      <strong>{message.author}:</strong> {message.content}
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
