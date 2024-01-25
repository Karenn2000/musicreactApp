import React, { useRef, useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { RiAddLine } from "react-icons/ri";
import { BiSortAlt2 } from "react-icons/bi";
import Music from "../assets/Music";
import { TbSearch } from "react-icons/tb";
import Table from "./Table";

const Navbar = () => {
  const [songs, setSongs] = useState(Music);
  const [selectedFile, setSelectedFile] = useState(null);
  //const audioRef = useRef()

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const uploadMusic = (el) => {
    const audioSrc = URL.createObjectURL(selectedFile);
    console.log(audioSrc, "audioSrcaudioSrc");
    // audioRef.current.src = audioSrc;
    // audioRef.current.play();
    //     console.log(selectedFile)
    const songModel = {
      src: URL.createObjectURL(selectedFile),
      name: selectedFile.name,
      authorName: selectedFile.author || selectedFile.name,
    };
    setSongs((prev) => [songModel, ...prev]);
  };

  const playMusic = (src) => {
    new Audio(src).play();
    // console.log(e.target);
    // console.log(e.target.children,'adss');
    // e.target.children[0].play()
  };

  return (
    <div>
      <nav className="nav">
        <div>
          <button className="btn">
            <FaPlay className="play" />
            Play All
          </button>

          <button className="open">
            <FaCaretDown />
          </button>

          <button className="btn2">
            <RiAddLine className="add" />
            Add All
          </button>

          <button className="open2">
            <FaCaretDown />
          </button>

          <input type={"file"} onChange={handleFileChange} />
          <button onClick={uploadMusic}>Click</button>

          <button className="btn_num">
            <BiSortAlt2 />
            Track Numbers <FaCaretDown className="alt" />
          </button>
          {/* <audio ref={audioRef}/> */}
          
          {songs.map((el) => {
            return (
              <div>
                <button onClick={() => playMusic(el.src)}>PLay</button>
                <h1>{el.name}</h1>
              </div>
            );
          })}
          <input className="search" placeholder="`${<TbSearch/>}` Filter" />
        </div>
      </nav>
      <Table/>
    </div>
  );
};

export default Navbar;
