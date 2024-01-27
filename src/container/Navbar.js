import React, { useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import { BiSortAlt2 } from "react-icons/bi";
import SongList from "../components/SongList";
import Music from "../assets/Music";
import MusicUploadForm from "../components/MusicUploadForm";
import PlayAllButton from "../components/PlayAllButton"; 
import AddAllButton from "../components/AddAllButton";


const Navbar = () => {
  const [playlist, setPlaylist] = useState(Music);

  const updatePlaylist = (newPlaylist) => {
    setPlaylist(newPlaylist);
  };

  return (
    <div>
      <nav className="nav">
        <div className="container">
           <PlayAllButton/>
           <AddAllButton />
          <div className="searchContainer">
            <button className="btn_num">
              <BiSortAlt2 />
              Track Numbers <FaCaretDown className="alt" />
            </button>
              <input
                type="text"
                className="search"
                placeholder="Search..."
              />
          </div>
        </div>
      </nav>
      <SongList playlist={playlist} />
      <MusicUploadForm updatePlaylist={updatePlaylist} />
      </div>
  );
};

export default Navbar;
