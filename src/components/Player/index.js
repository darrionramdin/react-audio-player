import React, { Component } from 'react';
import './index.css';

import AlbumArt from './AlbumArt/index';
import CurrentSong from './CurrentSong/index';

class Player extends Component {
    //http://choirzone.com/wp-content/uploads/2017/07/Oceans-Where-Feet-may-fail-Hillsong-UNITED.mp3
    constructor(props){
        super(props);
        this.audio = React.createRef();
    }
    
    state = {
        currentSong: '',
        showPlayButton: true,
        songProgress: '',
        song: {
            title: '',
            artist: '',
            url: '',
            cover: ''
        }
    }

    
    componentWillReceiveProps(nextProps) {     
        let newSong = Object.assign({}, this.state.song, {
            title: nextProps.song.title,
            artist: nextProps.song.artist,
            url: nextProps.song.url,
            cover: nextProps.song.cover
        });
        this.setState({
            song: newSong,
        })

        this.audio.current.oncanplaythrough = () => {
            this.playSong();
            this.setState({showPlayButton: false});
        }
    }

    pauseSong = () => {
        this.setState({showPlayButton: true});
        this.audio.current.pause();
    }

    songProgress = (currentTime, duration) => {
        let newValue = currentTime/duration;
        this.setState({songProgress: String(newValue)});
    }

    playSong = () => {
        if(this.audio.current.duration > 0) {
            let showPlayButton = this.state.showPlayButton;
            this.setState({showPlayButton: !showPlayButton})
        } 
        // let showPlayButton = this.state.showPlayButton;
        // this.setState({showPlayButton: !showPlayButton})
        this.audio.current.play();
        this.audio.current.ontimeupdate = () => this.songProgress(this.audio.current.currentTime, this.audio.current.duration);
    }

    render() { 
        return ( 
            <div className="Player">
                <AlbumArt src={this.state.song.cover} />
                <CurrentSong
                    songTitle={this.state.song.title}
                    songArtist={this.state.song.artist} 
                    onPlaySong={this.playSong}
                    onPauseSong={this.pauseSong} 
                    showPlayButton={this.state.showPlayButton}
                    onSongProgress={this.state.songProgress}
                />
                <audio ref={this.audio} src={this.state.song.url}></audio>
            </div>
         )
    }
}
 
export default Player;