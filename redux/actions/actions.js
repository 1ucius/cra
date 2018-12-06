import {xmlToJson, parsePodcastObject, shiftArrayItem, findDuplicate} from '../../components/helpers';

export const ACTIONS = {
    FETCH_PODCASTS_BEGIN:       'FETCH_PODCASTS_BEGIN',
    FETCH_PODCASTS_SUCCESS:     'FETCH_PODCASTS_SUCCESS',
    FETCH_PODCASTS_FAILURE:     'FETCH_PODCASTS_FAILURE',
    UPDATE_PODCASTS:            'UPDATE_PODCASTS',
    LOAD_MORE_PODCASTS:         'LOAD_MORE_PODCASTS',
    CHANGE_VOLUME:              'CHANGE_VOLUME'
}

export const fetchPodcastsBegin = () => ({
  type: ACTIONS.FETCH_PODCASTS_BEGIN
});

export const fetchPodcastsSuccess = podcasts => ({
  type: ACTIONS.FETCH_PODCASTS_SUCCESS,
  payload: podcasts
});

export const fetchPodcastsFailure = error => ({
  type: ACTIONS.FETCH_PODCASTS_FAILURE,
  payload: error
});

export const setPodcastsState = state => ({
    type: ACTIONS.UPDATE_PODCASTS,
    payload: state
});

export const loadMorePodcasts = new_count => ({
    type: ACTIONS.LOAD_MORE_PODCASTS,
    payload: new_count
});

export const changeVolume = volume => ({
    type: ACTIONS.CHANGE_VOLUME,
    payload: volume
});

export function fetchPodcasts(api_link) {
    return dispatch => {
        dispatch(fetchPodcastsBegin());
        return fetch(api_link)
            .then(res => res.text())
            .then(text => {
                console.log('recieved data')
                let arr = xmlToJson(new DOMParser().parseFromString(text, "text/xml")).rss.channel.item
                            .map((podcast, index) => parsePodcastObject(podcast, index));
                return arr;
            })
            .then(arr => dispatch(fetchPodcastsSuccess(arr)))
            .catch(error => dispatch(fetchPodcastsFailure(error)));
    };
}

// export function fetchPodcasts(api_link) {
//     return dispatch => {
//         dispatch(fetchPodcastsBegin());

//         return async function() {
//             const responce = await fetch(api_link);
//             const data     = await responce.text();
//             // if (data) {

//             // } else {

//             // }
//             console.log(data);
//         }
//         // return fetch(api_link)
//         //     .then(res => res.text())
//         //     .then(text => {
//         //         let arr = xmlToJson(new DOMParser().parseFromString(text, "text/xml")).rss.channel.item
//         //                     .map((podcast, index) => parsePodcastObject(podcast, index));
//         //         return arr;
//         //     })
//         //     .then(arr => dispatch(fetchPodcastsSuccess(arr)))
//         //     .catch(error => dispatch(fetchPodcastsFailure(error)));
//     };
// }

export function updatePodcasts(podcast) {
    return (dispatch, getState) => {
        let state     = getState().podcasts;
        let all       = state.all_podcasts;
        let recent    = state.recent_podcasts;
        let counter   = state.cache_counter;
        let new_state = {
            active_podcast: podcast
        };

        all.map((p, i) => {
            if (p.index === podcast.index) {
                all[i] = podcast;
            }
        });

        new_state.all_podcasts = all;

        let duplicate = findDuplicate(recent, podcast);
        if (duplicate > -1) {
            shiftArrayItem(recent, duplicate, 0);
            recent[0] = podcast;
        } else {
            recent.unshift(podcast);
        }
        if (recent.length > counter) recent = recent.splice(0, counter);

        new_state.recent_podcasts = recent;

        dispatch(setPodcastsState(new_state));
    }
}