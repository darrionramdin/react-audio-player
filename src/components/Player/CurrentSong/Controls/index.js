import React from 'react';
import './index.css';
import playIcon from './assets/play.png';
import pauseIcon from './assets/pause.png';

const Controls = (props) => {
    return (
        <div className="Controls">
            {
                props.showPlayButton ?
                <button onClick={props.handlePlayClick} className="Controls__control">
                    <img className="Controls__control-image" src={playIcon} alt="Play" />
                </button> :
                <button onClick={props.handlePauseClick} className="Controls__control">
                    <img className="Controls__control-image" src={pauseIcon} alt="Play" />
                </button> 
            }
            <progress className="Controls__progress" value={props.handleProgressChange} max="1"></progress>
        </div>
    )
}
 
export default Controls;