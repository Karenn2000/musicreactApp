import React, { useState } from "react";
import "./index.css";
import MusicData from "../assets/Music";

function Table() {
  const [playlist, setPlaylist] = useState([]);

  const addItem = (el) => {
    setPlaylist((prevPlaylist) => [...prevPlaylist, el]);
  };

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th></th>
            <th>Song Name</th>
            <th>Artist Name</th>
            <th>Track</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {playlist.map((el, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{el.title}</td>
              <td>{el.artists}</td>
              <td>
                <audio controls>
                  <source src={el.src} type="audio/mp3" />
                  
                </audio>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={() => addItem(MusicData[0])}>Add</button>
    </div>
  );
}

export default Table;