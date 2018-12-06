import React, { Component }     from 'react';

import PodcastView              from '../functional/PodcastView'
import {connect}                from 'react-redux';
import {updatePodcasts}   from '../../redux/actions/actions';


class Podcast extends Component {
	state = {
		shown: false
	}


	componentWillMount = () => {
		this.el = React.createRef();
	}


	componentDidMount = () => {
		this.loadImage();
	}


	loadImage = () => {
		this.image     = new Image();
		this.image.addEventListener('load', () => {
			delete this.image;
			this.setState({shown: true});
		});
		this.image.src = this.props.info.cover_image;
	}


	update = () => {
		this.props.updateInfo(this.props.info);
	}


    render() {
		const {info, active} = this.props;

        return (
			<div 
				className = {`podcast roboto ${this.state.shown ? 'podcast_shown' : ''} ${active ? 'podcast_active' : ''}`}
				onClick   = {this.update}
				ref       = {this.el}
			>
				<PodcastView 
					shown           = {this.state.shown}
					active          = {active}
					cover_image     = {info.cover_image}
					title           = {info.title}
					publishing_date = {info.publishing_date}
				/>
			</div>
        )
    }
}

export default connect(
	state => ({
		state: state.podcasts.active_podcast
	}),
	dispatch => ({
		updateInfo: info => {
			dispatch(updatePodcasts(info));
		}
	})
)(Podcast);