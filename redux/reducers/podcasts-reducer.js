import {ACTIONS} from '../actions/actions';

const initialState = {
    api_link: 'https://cors-anywhere.herokuapp.com/tools.planetradio.co.uk/core/podcasts/rss.php?name=radio-1-norge',
    all_podcasts: [],
	active_podcast: {},
	recent_podcasts: [],
	loading:  false,
	error:    null,
	podcasts_amount: null,
    amount_to_display: 12,
	amount_to_display_increment: 12,
	cache_counter: 5
}

export default function podcastsReducer(
	state = initialState,
	{type, payload}
) {
	switch (type) {
		case ACTIONS.FETCH_PODCASTS_BEGIN:
			return {
				...state,
				loading: true,
				error:   null
			}
		case ACTIONS.FETCH_PODCASTS_SUCCESS:
			return {
				...state,
				all_podcasts: payload,
				podcasts_amount: payload.length,
				loading:      false,
				error:        null
			}
		case ACTIONS.FETCH_PODCASTS_FAILURE:
			return {
				...state,
				loading: false,
				error:   payload
            }
        case ACTIONS.LOAD_MORE_PODCASTS:
            return {
                ...state,
                amount_to_display: payload
			}
		case ACTIONS.UPDATE_PODCASTS:
			return {
				...state,
				active_podcast: payload.active_podcast,
				all_podcasts: payload.all_podcasts,
				recent_podcasts: payload.recent_podcasts
			}
		default:
			return state;
	}
}