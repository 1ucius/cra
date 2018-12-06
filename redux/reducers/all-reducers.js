import {combineReducers} from 'redux';
import podcastsReducer   from './podcasts-reducer';
import playerReducer     from './player-reducer';

const allReducers = combineReducers({
    podcasts: podcastsReducer,
    player:   playerReducer
});

export default allReducers;