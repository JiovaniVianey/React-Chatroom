// Messages.js
import { useSelector } from 'react-redux';
import { useEffect, useRef } from 'react';
import Message from './Message';
import './Messages.scss';

const Messages = () => {
  const messages = useSelector((state) => state.messages);

  const refContainer = useRef(null);

  useEffect(() => {
    const containerElement = refContainer.current;

    containerElement.scrollTo({
      top: containerElement.scrollHeight,
      left: 0,
      behavior: 'smooth',
    });
  }, [messages]);

  return (
    <div>
      <div className="messages" ref={refContainer}>
        {messages.map((message) => (
          <Message key={message.id} {...message} />
        ))}
      </div>
    </div>
  );
};

export default Messages;
