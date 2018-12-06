import {ACTIONS} from '../actions/actions';

const initialState = {
    volume:       1
}

export default function playerReducer(
    state = initialState,
    {type, payload}
) {
    switch (type) {
        case ACTIONS.CHANGE_VOLUME: 
            return {
                ...state,
                volume: payload
            }
        default:
            return state;
    }
}