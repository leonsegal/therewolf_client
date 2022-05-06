import React, { useEffect, useState } from "react";
import socketIOClient from "socket.io-client";
import InfoPanel from "./header/InfoPanel";
import Messages from "./Messages";
import ChatForm from "./ChatForm";
import Intro from "./Intro";

let apiEndpoint = "http://localhost:4500";
let socket = socketIOClient(apiEndpoint);
let id = sessionStorage.getItem("id");
if (id) {
  socket.emit("reconnect player", id);
}

function App() {
  let [name, setName] = useState("");
  let [players, setPlayers] = useState([]);
  let [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on("player connected", ({ name, players, messages }) => {
      sessionStorage.setItem("id", id);

      setName(name);
      setPlayers(players);
      setMessages(messages);
    });
  }, []);

  return (
    <>
      {name === "" ? (
        <Intro socket={socket} />
      ) : (
        <>
          <InfoPanel players={(players, id)} />
          <Messages socket={socket} allMessages={messages} />
          <ChatForm socket={socket} />
        </>
      )}
    </>
  );
}

export default App;
