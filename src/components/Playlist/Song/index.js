import React from 'react';
import './index.css';

const Song = (props) => {
    return (
        <div onClick={() => props.handleSongClick(props.title, props.artist, props.url, props.cover)} className="Song">
            <div className="Song__icon">
                
            </div>
            <div className="Song__title">
                {props.title}
            </div>
            <div className="Song__artist">
                {props.artist}
            </div>
        </div>
    );
}
 
export default Song;