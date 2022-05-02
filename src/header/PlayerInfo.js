import React from "react";

function PlayerInfo({ players }) {
  return (
    <div id="players">
      <span>
        <strong>Players:</strong>
      </span>
      <ul>
        {players.map((player, id) => (
          <li key={id}>{player.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default PlayerInfo;
