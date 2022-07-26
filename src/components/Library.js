// import { library } from '@fortawesome/fontawesome-svg-core';
import { library } from '@fortawesome/fontawesome-svg-core';
import React from 'react';
import LibrarySong from './LibrarySong';

const Library = ({
  songs,
  setCurrentSong,
  audioRef,
  isPlaying,
  setSongs,
  libraryStatus,
  currentSong,
}) => {
  const llist = songs.map((song) => {
    return (
      <LibrarySong
        id={song.id}
        key={song.id}
        songs={songs}
        setCurrentSong={setCurrentSong}
        song={song}
        audioRef={audioRef}
        isPlaying={isPlaying}
        setSongs={setSongs}
        currentSong={currentSong}
      />
    );
  });

  return (
    <div className={`library ${libraryStatus ? 'active-library' : ''}`}>
      <h2>Library</h2>

      <div className="library-songs">{llist}</div>
    </div>
  );
};

export default Library;
