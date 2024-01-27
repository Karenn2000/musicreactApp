import React from "react";
import SongRow from "../components/SongRow";
import "./index.css"; 
import MusicUploadForm from "./MusicUploadForm";

function SongList({playlist}) {
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
          {playlist.map((el) => (
            <SongRow key={el.id} el={el}/>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SongList;
