import React, { useState, useEffect } from "react";

function ChatForm({ socket }) {
  let [message, setMessage] = useState("");

  useEffect(() => {
    socket.on("chat message", () => setMessage(""));
  }, [socket]);

  let handleSubmit = (e) => {
    e.preventDefault();
    socket.emit("chat message", message);
    message = "";
  };

  return (
    <form id="form" onSubmit={handleSubmit}>
      <input
        id="input"
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        autoComplete="off"
      />
      <input type="submit" value="Send" />
    </form>
  );
}

export default ChatForm;
