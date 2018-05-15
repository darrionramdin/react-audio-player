import React from 'react';
import './index.css';
import Song from './Song/index';

const Playlist = (props) => {
    return (
        <div className="Playlist">
            {
                props.songlist ? 
                props.songlist.map(song => {
                    return (
                        <Song
                            handleSongClick={props.onSongClick}
                            key={song.id} 
                            title={song.title} 
                            artist={song.artist}
                            url={song.url}
                            cover={song.cover} 
                        /> 
                    );
                }) :
                <div>Loading...</div>
            }
        </div>
    )
}
 
export default Playlist;