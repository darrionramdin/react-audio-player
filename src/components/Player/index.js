import React, { Component } from 'react';
import './index.css';

import AlbumArt from './AlbumArt/index';
import CurrentSong from './CurrentSong/index';
import AddSong from './AddSong/index';

class Player extends Component {
    //http://choirzone.com/wp-content/uploads/2017/07/Oceans-Where-Feet-may-fail-Hillsong-UNITED.mp3
    constructor(props){
        super(props);
        this.audio = React.createRef();
    }
    
    state = {
        currentSong: 'http://choirzone.com/wp-content/uploads/2017/07/Oceans-Where-Feet-may-fail-Hillsong-UNITED.mp3',
        showPlayButton: true,
        songProgress: ''
    }

    componentDidMount() {
        
    }

    pauseSong = () => {
        this.setState({showPlayButton: true});
        this.audio.current.pause();
    }

    songProgress = (currentTime, duration) => {
        let newValue = currentTime/duration;
        this.setState({songProgress: newValue});
    }

    playSong = () => {
        let showPlayButton = this.state.showPlayButton;
        this.setState({showPlayButton: !showPlayButton})
        this.audio.current.play();
        this.audio.current.ontimeupdate = () => this.songProgress(this.audio.current.currentTime, this.audio.current.duration);
    }

    render() { 
        return ( 
            <div className="Player">
                <AlbumArt src="https://is1-ssl.mzstatic.com/image/thumb/Music6/v4/df/d2/9b/dfd29b0e-528c-6111-ba52-6e1aac686650/05099963269352.jpg/1200x630bb.jpg" />
                <CurrentSong 
                    onPlaySong={this.playSong}
                    onPauseSong={this.pauseSong} 
                    showPlayButton={this.state.showPlayButton}
                    onSongProgress={this.state.songProgress}
                />
                <AddSong />
                <audio ref={this.audio} src={this.state.currentSong}></audio>
            </div>
         )
    }
}
 
export default Player;