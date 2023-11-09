// Form.js
import React, { useState } from 'react';
import { Send } from 'react-feather';
import { useDispatch } from 'react-redux';
import { addMessage } from '../../actions/chatActions';
import './Form.scss';

const Form = () => {
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() !== '') {
      dispatch(
        addMessage({
          author: 'Moi',
          content: message,
        })
      );
      setMessage('');
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        className="form-input"
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Saisissez votre message..."
      />
      <button type="submit" className="form-submit">
        <Send size={40} />
      </button>
    </form>
  );
};

export default Form;
