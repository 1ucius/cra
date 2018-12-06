import React from 'react';
import 	     Slider         from '../containers/Slider';
import      playIcon        from "../../img/icons/play.svg";
import      pauseIcon       from "../../img/icons/pause.svg";
import      volumeIcon      from "../../img/icons/volume.svg";

const PlayerView = React.memo(props => {
    return (
        <div className={`radio__player-wrap${props.active ? ' radio__player-wrap_active' : ''}`}>
            <div 
                className={`player${props.playing ? ' player_playing' : ''}`} 
                id="player"
            >
                <div className="container">
                    <div className="player__wrap">
                        <div className="player__cover">
                            <img 
                                src={props.cover_image} 
                                alt="podcast cover"
                            />
                            <h3 className="player__title roboto small-font">
                                <p>{props.title}</p>
                                <p>{props.publishing_date}</p>
                            </h3>
                        </div>
                        <div className="player__controls">
                            <div className="player__row player__row_center">
                                <span className="player__playback" onClick={props.play_btn_callback}>
                                    <img 
                                        className="player__icon player__icon_play" 
                                        src={playIcon} 
                                        alt="play icon"
                                    />
                                    <img 
                                        className="player__icon player__icon_pause" 
                                        src={pauseIcon} 
                                        alt="pause icon"
                                    />
                                </span>
                            </div>
                            <div className="player__time">
                                <Slider 
                                    type           = 'time' //'time' or 'volume'
                                    duration       = {props.podcast.duration}
                                    value          = {props.podcast.duration_in_sec}
                                    progress       = {props.podcast.current_time}
                                    drag_size      = {10}
                                    direction      = 'horizontal'
                                    callback       = {props.time_callback}
                                    force_update   = {false}
                                    autohide       = {false}
                                />
                            </div>
                            <div className="player__volume">
                                <img 
                                    src={volumeIcon} 
                                    className="player__icon player__icon_volume" 
                                    alt="volume icon"
                                />
                                <Slider 
                                    type           = 'volume' //'time' or 'volume'
                                    duration       = {100}
                                    value          = {100}
                                    progress       = {props.volume*100 || 100}
                                    drag_size      = {10}
                                    direction      = 'horizontal'
                                    callback        = {props.volume_callback}
                                    force_update   = {true}
                                    autohide       = {true}
                                />
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    )
});


export default PlayerView;