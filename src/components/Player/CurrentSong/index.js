import React from 'react';
import './index.css';
import SongInfo from './SongInfo/index';
import Controls from './Controls/index';

const CurrentSong = (props) => {
    return (
        <div className="CurrentSong">
            <SongInfo artist={props.songArtist} title={props.songTitle} />
            <Controls 
            handlePlayClick={props.onPlaySong} 
            handlePauseClick={props.onPauseSong}
            handleProgressChange={props.onSongProgress}
            showPlayButton={props.showPlayButton}
             />
        </div>
    )
}
 
export default CurrentSong;