import React, { useState } from "react";
import { v4 as uuid } from "uuid";

export default function Intro({ socket }) {
  let [name, setName] = useState("");

  let handleSubmit = (e) => {
    e.preventDefault();
    let id = uuid();
    socket.emit("register player", { name, id });
  };

  return (
    <div>
      <h3>How to play</h3>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
        aperiam delectus enim esse est eveniet fugit inventore ipsam laborum,
        nisi odio quaerat quod sunt ullam voluptate, voluptates voluptatum!
        Dolor, veniam!
      </p>

      <h4>What's your name?</h4>
      <form id="form" onSubmit={handleSubmit}>
        <input
          id="input"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          autoComplete="off"
          autoFocus={true}
        />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
}
