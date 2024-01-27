import React, { useRef, useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faCheck, faShare, faCaretDown } from '@fortawesome/free-solid-svg-icons'; // Import the specific icons you want to use
import "./index.css"; 

function SongRow({el}) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  
  useEffect(() => {
    const audio = audioRef.current;

    const handleAudioPlay = () => {
      setIsPlaying(true);
    };

    const handleAudioPause = () => {
      setIsPlaying(false);
    };

    audio.addEventListener("play", handleAudioPlay);
    audio.addEventListener("pause", handleAudioPause);

    return () => {
      audio.removeEventListener("play", handleAudioPlay);
      audio.removeEventListener("pause", handleAudioPause);
    };
  }, []);

  const handlePlayButtonClick = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      document.querySelectorAll('audio').forEach(audio => {
        if (audio !== audioRef.current && !audio.paused) {
          audio.pause();
        }
      });

      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <tr className="song-row" key={el.id}>
      <td>
        <div className="audio-controls">
          <audio ref={audioRef} controls>
            <source src={el.src} type="audio/mp3" />
          </audio>
          <button
            className={`audio-play-button ${isPlaying ? "playing" : ""}`}
            onClick={handlePlayButtonClick}
          ></button>
        </div>
      </td>
      <td>{el.title}</td>
      <td>{el.artists}</td>
      <td>{el.id}</td>
      <td>
      <div className="icon-container">
        <FontAwesomeIcon icon={faHeart} className="icon" />
        <FontAwesomeIcon icon={faCheck} className="icon" />
        <FontAwesomeIcon icon={faShare} className="icon" />
        <FontAwesomeIcon icon={faCaretDown} className="icon" />
     </div>
      </td>
    </tr>
  );
}

export default SongRow;
