// PlayAllButton.js
import React from "react";
import "../index.css";
import { FaPlay, FaCaretDown } from "react-icons/fa";

function PlayAllButton() {
  const handleClick = () => {
    console.log("Play All")
  };

  return (
    <div>
      <div>
        <button className="btn" onClick={handleClick}>
          <FaPlay className="play" />
          Play All
        </button>
        <button className="open">
          <FaCaretDown />
        </button>
      </div>
    </div>
  );
}

export default PlayAllButton;
