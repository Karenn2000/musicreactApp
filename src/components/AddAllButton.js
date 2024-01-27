// PlayAllButton.js
import React from "react";
import "../index.css"
import { RiAddLine } from "react-icons/ri";
import { FaCaretDown } from "react-icons/fa";

function AddAllButton() {
  const handleButtonClick = () => {
    console.log("Add All")
  };

  return (
    <div>
      <div>
        <button className="btn2" onClick={handleButtonClick} >
            <RiAddLine className="add"/>
            Add All
          </button>
        <button className="open2">
            <FaCaretDown />
          </button>
      </div>
    </div>
  );
}

export default AddAllButton;
