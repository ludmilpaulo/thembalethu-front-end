import React, { useEffect, useState, ChangeEvent } from "react";

const Chat: React.FC = () => {
  const [message, setMessage] = useState<string>("");
  const [messages, setMessages] = useState<string[]>([]);
  let socket: WebSocket;

  useEffect(() => {
    // Create a WebSocket connection when the component mounts
    socket = new WebSocket("ws://127.0.0.1:8000/ws/chat/");

    // Handle incoming messages
    socket.addEventListener("message", (event) => {
      const data = JSON.parse(event.data);
      setMessages((prevMessages) => [...prevMessages, data.message]);
    });

    // Clean up the WebSocket connection when the component unmounts
    return () => {
      if (socket) {
        socket.close();
      }
    };
  }, []); // Run this effect only once when the component mounts

  const sendMessage = () => {
    if (message.trim() !== "" && socket?.readyState === WebSocket.OPEN) {
      socket.send(JSON.stringify({ message }));
      setMessage("");
    }
  };

  return (
    <div>
      <div>
        {messages.map((msg, index) => (
          <div key={index}>{msg}</div>
        ))}
      </div>
      <input
        type="text"
        placeholder="type your message"
        value={message}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setMessage(e.target.value)
        }
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default Chat;
