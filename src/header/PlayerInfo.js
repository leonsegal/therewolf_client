import React from "react";

function PlayerInfo({ players, id }) {
  console.log(players); // deleteme
  console.log(sessionStorage.getItem("id")); // deleteme

  let thePlayer = players.find((player) => player.id === id);
  return (
    <div id="players">
      <span>
        <strong>Players:</strong>
      </span>
      <ul>
        <li>{thePlayer.name} (you)</li>
        {players
          .filter((player) => player.name !== thePlayer.name)
          .map((player, id) => (
            <li key={id}>{player.name}</li>
          ))}
      </ul>
    </div>
  );
}

export default PlayerInfo;
