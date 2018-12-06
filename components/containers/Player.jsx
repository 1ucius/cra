import React, { Component } from 'react';
import { connect } from 'react-redux';
import {changeVolume, updatePodcasts} from '../../redux/actions/actions'


import PlayerView from '../functional/PlayerView';


class Player extends Component {
	state = {
		playing: false
	};


	componentWillMount = () => {
		this.audio        = new Audio();
		this.audio.volume = 1;
		this.audio.addEventListener('timeupdate', this.progressUpdate);
		this.audio.addEventListener('ended', this.audioEnded);
	}
	
	audioEnded = () => {
		this.setState({
			playing: false
		})
	}


	togglePlay = () => {
		this.setState({playing: !this.state.playing},
			() => {
				if (this.state.playing) {
					this.audio.play();
				} else {
					this.audio.pause();
				}
			}
		);
	}


	progressUpdate = () => {
		let updated = Object.assign({}, this.props.podcast);
		updated.current_time = this.audio.currentTime;
		this.props.updateInfo(updated);
	}


	updateAudio = () => {
		if (this.audio.src !== this.props.podcast.source) {
			this.audio.src         = this.props.podcast.source;
			this.audio.currentTime = this.props.podcast.current_time || 0;
			if (this.state.playing) {
				this.audio.play();
			} else {
				this.audio.pause();
			}
		}
		
	}


	recieveTimeFromSlider = time => {
		this.audio.currentTime = time;
	}


	recieveVolumeFromSlider = volume => {
		this.audio.volume = volume;
		this.props.changeVolume(volume);
	}
	

	render() {
		const {volume, podcast} = this.props;
		this.updateAudio();
	
		return <PlayerView 
			active            = {Object.keys(podcast).length}
			podcast           = {podcast}
			playing           = {this.state.playing}
			cover_image       = {podcast.cover_image}
			title             = {podcast.title}
			publishing_date   = {podcast.publishing_date}
			play_btn_callback = {this.togglePlay}
			time_callback     = {this.recieveTimeFromSlider}
			volume_callback   = {this.recieveVolumeFromSlider}
			volume            = {volume}
		/>
	}
}

export default connect(
	state => ({
		volume:       state.player.volume,
		podcast:      state.podcasts.active_podcast
	}),
	dispatch => ({
		updateInfo: info => {
			dispatch(updatePodcasts(info));
		},
		changeVolume: volume => {
			dispatch(changeVolume(volume));
		}
	})
)(Player); 