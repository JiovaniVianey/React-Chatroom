// Messages.js
import React from 'react';
import { useSelector } from 'react-redux';
import Message from './Message';
import './Messages.scss';

const Messages = () => {
  const messages = useSelector((state) => state.messages);

  return (
    <div>
      <div className="messages">
        {messages.map((message) => (
          <Message key={message.id} message={message} />
        ))}
      </div>
    </div>
  );
};

export default Messages;
