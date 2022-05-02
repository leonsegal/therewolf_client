import React, { useState, useEffect } from "react";

function ChatForm(props) {
  let [message, setMessage] = useState("");

  useEffect(() => {
    props.socket.on("chat message", () => setMessage(""));
  }, [props.socket]);

  let handleSubmit = (e) => {
    e.preventDefault();
    props.socket.emit("chat message", message);
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
