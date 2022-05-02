import React, { useState, useEffect } from "react";

function Messages({ allMessages, socket }) {
  let [messages, setMessages] = useState(allMessages);

  useEffect(() => {
    socket.on("chat message", (allMessages) => setMessages(allMessages));
  }, [socket]);

  return (
    <ul>
      {messages.map((message, id) => (
        <li key={id}>{message}</li>
      ))}
    </ul>
  );
}

export default Messages;
