import { useEffect, useState } from 'react';
import io from 'socket.io-client';
import ChatCard from './ChatCard';
import ChatForm from './ChatForm';

function Chat() {
  const [socket] = useState(io(':8000'));
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on('chat-message', (message) => {
      console.log(message);
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => socket.off('chat-message');
  }, [socket]);

  return (
    <>
      <ChatCard messages={messages} />
      <ChatForm />
    </>
  );
}
export default Chat;
