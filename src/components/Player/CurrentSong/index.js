import React from 'react';
import './index.css';
import SongInfo from './SongInfo/index';
import Controls from './Controls/index';

const CurrentSong = (props) => {
    return (
        <div className="CurrentSong">
            <SongInfo artist="Hillsong United" title="Where feet may fall" />
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