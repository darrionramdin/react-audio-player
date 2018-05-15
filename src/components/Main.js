import React, { Component } from 'react';
import './Main.css';
import Player from './Player/index';
import Playlist from './Playlist/index';
import songs from '../songs';

class Main extends Component {
    state = {
        song: {
            title: '',
            artist: '',
            url: '',
            cover: ''
        },
        songlist: null
    }

    componentDidMount() {
        const initialState = Object.assign({}, this.state.song, {
            title: 'Oceans',
            artist: 'Hillsong United',
            url: 'http://choirzone.com/wp-content/uploads/2017/07/Oceans-Where-Feet-may-fail-Hillsong-UNITED.mp3',
            cover: 'https://is1-ssl.mzstatic.com/image/thumb/Music6/v4/df/d2/9b/dfd29b0e-528c-6111-ba52-6e1aac686650/05099963269352.jpg/1200x630bb.jpg'
        })
        this.setState({
            songlist: songs,
            song: initialState
        })
    }

    selectSong = (title, artist, url, cover) => {
        const songSelected = Object.assign({}, this.state.song, {
            title,
            artist,
            url,
            cover
        });
        this.setState({
            song: songSelected
        });     
    }
    render() { 
        return ( 
            <div className="Main">
                <Player song={this.state.song} />
                <Playlist songlist={this.state.songlist} onSongClick={this.selectSong} />
            </div>
         )
    }
}
 
export default Main;