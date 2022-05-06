import React from "react";
import RoleInfo from "./RoleInfo";
import PlayerInfo from "./PlayerInfo";

function InfoPanel({ players, id }) {
  return (
    <div id="info">
      <RoleInfo />
      <PlayerInfo players={players} id={id} />
    </div>
  );
}

export default InfoPanel;
