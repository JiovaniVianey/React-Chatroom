import PropTypes from 'prop-types';

const Message = ({ author, content }) => {
  return (
    <div className="message">
      <div className="message-author">{author}:</div>
      <div className="message-content">{content}</div>
    </div>
  );
};

export default Message;

Message.propTypes = {
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
