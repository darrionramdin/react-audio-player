import React from 'react';
import './index.css';

const AlbumArt = (props) => {
    return (
        <div className="AlbumArt">
            <img className="AlbumArt__image" src={props.src} alt="Hillsong United: Aftermath" />
        </div>
    );
}
 
export default AlbumArt;