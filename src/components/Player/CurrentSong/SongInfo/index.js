import React from 'react';
import './index.css';

const SongInfo = (props) => {
    return (
        <div className="SongInfo">
            <h5 className="SongInfo__artist">
                {props.artist}   
            </h5>
            <h5 className="SongInfo__title">
                {props.title}  
            </h5>
        </div>
    )
}
 
export default SongInfo;