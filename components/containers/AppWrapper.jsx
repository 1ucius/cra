import React, { Component }              from 'react';
import {debounce}                        from 'lodash';
import LoaderView                        from '../functional/loader';
import AppHeader                         from '../functional/AppHeaderView';
import AllPodcasts                       from '../functional/AllPodcastsView';
import RecentPodcasts                    from '../functional/RecentPodcastsView';
import Podcast                           from './Podcast';
import Player                            from './Player';
import logo                              from '../../logo.svg';
import {connect}                         from 'react-redux';
import {fetchPodcasts, loadMorePodcasts} from '../../redux/actions/actions';


class AppWrapper extends Component {

    componentDidMount = () => {
        // if (navigator.onLine) {
            this.props.fetch(this.props.podcasts.api_link);
        // }

        window.addEventListener('scroll', debounce(this.loadMore, 300));
    }

    componentWillUnmount = () => {
        window.removeEventListener('scroll', debounce(this.loadMore, 300));
    }

    loadMore = () => {
        if (
            (window.innerHeight + window.scrollY) >= document.body.scrollHeight - 100 &&
            this.props.podcasts.podcasts_amount >= this.props.podcasts.amount_to_display
        ) {
            this.props.loadMorePodcasts(this.props.podcasts.amount_to_display + 
                                        this.props.podcasts.amount_to_display_increment);
        }
    }

    createPodcastsToRender = (arr, amount) => {
        let podcasts_to_render = amount ? arr.slice(0, amount) : arr;
        return podcasts_to_render.map(podcast => {
            let is_active = podcast === this.props.podcasts.active_podcast ? true : false;
            return <Podcast
                        key    = {podcast.index}
                        info   = {podcast}
                        active = {is_active}
                    />
        })
    }

    cacheData = () => {
        if (!('indexedDB' in window)) {
            console.log('This browser doesn`t support IndexedDB');
            return;
          }
    }

    render() {
        const {podcasts} = this.props;
        let all     = '';
        let offline = !navigator.onLine;
        // let loader = '';

        // if (podcasts.loading) {
        //     loader = <LoaderView />
        // }

        if (!offline) {
            all = <AllPodcasts 
                    podcasts_array = {this.createPodcastsToRender(podcasts.all_podcasts, podcasts.amount_to_display)} 
                  />
        }

        return (
            <div className={`radio ${offline ? 'radio_offline' : ''}`} id="radio">
                {/* {loader} */}
                {/* <button onClick={this.cacheData}>Click</button> */}
                <AppHeader 
                    link = '#1'
                    logo = {logo}
                />
                <RecentPodcasts
                    podcasts_array = {this.createPodcastsToRender(podcasts.recent_podcasts)} 
                />
                {all}
                <Player/>
                
            </div>
        )
    }
}

export default connect(
    state => ({
        podcasts: state.podcasts
    }),
    dispatch => ({
        fetch: link => {
            dispatch(fetchPodcasts(link));
        },
        loadMorePodcasts: new_count => {
            dispatch(loadMorePodcasts(new_count));
        }
    })
)(AppWrapper);