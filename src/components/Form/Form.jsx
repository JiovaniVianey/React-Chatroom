// Form.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addMessage } from '../../actions/chatActions';

const Form = () => {
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() !== '') {
      dispatch(
        addMessage({
          author: 'Super Chat',
          content: message,
        })
      );
      setMessage('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Saisissez votre message..."
      />
      <button type="submit">Envoyer</button>
    </form>
  );
};

export default Form;
