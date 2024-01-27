import React, { useState } from "react";
import Music from "../assets/Music";
import "./index.css"; 
import { FaUpload } from "react-icons/fa";

const MusicUploadForm = ({ updatePlaylist }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const uploadMusic = () => {
    if (selectedFile) {
      const audioSrc = URL.createObjectURL(selectedFile);
      const newId = Math.max(...Music.map(music => music.id)) + 1;

      const newMusic = {
        id: newId,
        src: audioSrc,
        duration: selectedFile.duration || 0,
        title: selectedFile.title || selectedFile.name,
        artists: selectedFile.artists || "Unknown",
      };

      updatePlaylist(prevPlaylist => [...prevPlaylist, newMusic]);
    }
  };

  return (
    <div>
      <div className="upload-container">
        <label htmlFor="file" className="upload-label">
          <FaUpload className="upload-icon" />
          Choose File
        </label>
        <input type="file" accept=".mp3, .wav" id="file" className="upload-input" onChange={handleFileChange} />
        <button className="upload-button" onClick={uploadMusic}>
          Upload
        </button>
      </div>
    </div>
  );
};

export default MusicUploadForm;
