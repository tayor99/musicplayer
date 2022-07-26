import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleLeft,
  faAngleRight,
  faPlay,
  faPause,
} from '@fortawesome/free-solid-svg-icons';

const Player = ({
  setSongInfo,
  songInfo,
  audioRef,
  currentSong,
  isPlaying,
  setIsPlaying,
  songs,
  setCurrentSong,
  setSongs,
  // timeUpdateHandler,
}) => {
  const activeLibraryHandler = (nextPrev) => {
    const newSongs = songs.map((song) => {
      if (song.id === nextPrev.id) {
        return {
          ...song,
          active: true,
        };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });
    setSongs(newSongs);
  };

  // Event handler
  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
      console.log(`it is paused ${isPlaying}`);
    } else {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
      console.log(`it is playing ${isPlaying}`);
    }
    // console.log(audioRef);
  };

  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2)
    );
  };
  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({ ...songInfo, currentTime: e.target.value });
  };
  const skipTrckHandler = async (direction) => {
    let currentIndex = songs.findIndex((song) => {
      return song.id === currentSong.id;
    });
    if (direction === 'skip-forward') {
      await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
      activeLibraryHandler(songs[(currentIndex + 1) % songs.length]);
    }
    if (direction === 'skip-back') {
      if ((currentIndex - 1) % songs.length === -1) {
        await setCurrentSong(songs[songs.length - 1]);
        activeLibraryHandler(songs[songs.length - 1]);
        if (isPlaying) audioRef.current.pause();
        return;
      }
      setCurrentSong(songs[(currentIndex - 1) % songs.length]);
      activeLibraryHandler(songs[(currentIndex - 1) % songs.length]);
    }
    if (isPlaying) audioRef.current.play();
  };
  // adding aimated styles
  const trackAnim = {
    transform: `translateX(${songInfo.animationPercentage}%)`,
  };
  const trackBG = {
    background: `linear-gradient(to right, ${currentSong.color[0]},${currentSong.color[1]})`,
  };
  // console.log(trackBG.background);

  return (
    <div className="player">
      <div className="time-control">
        <p>{songInfo.duration ? getTime(songInfo.currentTime) : '0:00'}</p>
        <div
          style={trackBG}
          // `linear-gradient(to right, red,blue)`
          className="track"
        >
          <input
            min={0}
            max={songInfo.duration || 0}
            value={songInfo.currentTime}
            onChange={dragHandler}
            type="range"
          />
          <div style={trackAnim} className="animate-track "></div>
        </div>
        <p>{songInfo.duration ? getTime(songInfo.duration) : '0:00'}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon
          onClick={() => skipTrckHandler('skip-back')}
          className="skip-back"
          size="2x"
          icon={faAngleLeft}
        />
        <FontAwesomeIcon
          onClick={playSongHandler}
          className="play"
          size="2x"
          icon={isPlaying ? faPause : faPlay}
        />
        <FontAwesomeIcon
          onClick={() => skipTrckHandler('skip-forward')}
          className="skip-forward"
          size="2x"
          icon={faAngleRight}
        />
      </div>
    </div>
  );
};

export default Player;
