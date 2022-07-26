import { React, useState, useRef } from 'react';
// import './App.css';
import './styles/app.scss';

// components
import Song from './components/Song';
import Player from './components/Player';
import data from './components/data';
import Library from './components/Library';
import Nav from './components/Nav';
function App() {
  // state
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentage: 0,
  });
  const [libraryStatus, setLibraryStatus] = useState(false);
  const audioRef = useRef(null);
  // console.log(audioRef);

  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    // calculate animation percentage
    const roundedCurrent = Math.round(current);
    const roundedDuration = Math.round(duration);
    const animation = Math.round((roundedCurrent / roundedDuration) * 100);
    console.log(animation);
    setSongInfo({
      currentTime: current,
      duration: duration,
      animationPercentage: animation,
    });
  };
  const songEndHandler = async () => {
    let currentIndex = songs.findIndex((song) => {
      return song.id === currentSong.id;
    });
    await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
    if (isPlaying) audioRef.current.play();
  };
  // Ref
  return (
    <div className={`App ${libraryStatus ? 'library-active' : ''} `}>
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Song currentSong={currentSong} />
      <Player
        setIsPlaying={setIsPlaying}
        isPlaying={isPlaying}
        currentSong={currentSong}
        audioRef={audioRef}
        songInfo={songInfo}
        setSongInfo={setSongInfo}
        setSongs={setSongs}
        songs={songs}
        setCurrentSong={setCurrentSong}
        // timeUpdateHandler={timeUpdateHandler}
      />
      <Library
        libraryStatus={libraryStatus}
        setLibraryStatus={setLibraryStatus}
        songs={songs}
        setCurrentSong={setCurrentSong}
        audioRef={audioRef}
        isPlaying={isPlaying}
        setSongs={setSongs}
      />
      <audio
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
        ref={audioRef}
        src={currentSong.audio}
        onEnded={songEndHandler}
      ></audio>
    </div>
  );
}

export default App;
