import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
import InfoPanel from "./header/InfoPanel";
import Messages from "./Messages";
import ChatForm from "./ChatForm";
import Intro from "./Intro";

let apiEndpoint = "http://localhost:4500";
let socket = socketIOClient(apiEndpoint);
let playerName = getName();
let hasRegistered = false;

registerPlayer(playerName);

function getName() {
  let playerName = sessionStorage.getItem("name");

  if (playerName) {
    return playerName;
  }

  playerName = prompt("What's your name?");

  if (!playerName) {
    getName();
  }

  return playerName;
}

function registerPlayer(name) {
  sessionStorage.setItem("name", name);

  socket.emit("player connected", name);
}

function App() {
  let [messages, setMessages] = useState([]);
  let [players, setPlayers] = useState([]);

  useEffect(() => {
    socket.on("player connected", (data) => {
      hasRegistered = true;
      setPlayers(data.players);
      setMessages(data.messages);
    });
  }, []);

  return (
    <>
      {!hasRegistered ? <Intro /> : ""}
      {hasRegistered ? <InfoPanel players={players} /> : ""}
      {hasRegistered ? <Messages socket={socket} allMessages={messages} /> : ""}
      {hasRegistered ? <ChatForm socket={socket} /> : ""}
    </>
  );
}

export default App;
