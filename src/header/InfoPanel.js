import React from "react";
import RoleInfo from "./RoleInfo";
import PlayerInfo from "./PlayerInfo";

function InfoPanel({ players }) {
  return (
    <div id="info">
      <RoleInfo />
      <PlayerInfo players={players} />
    </div>
  );
}

export default InfoPanel;
