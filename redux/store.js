import { 
    applyMiddleware, 
    compose,  
    createStore 
} from "redux";
import allReducers from "./reducers/all-reducers";
import    thunk    from 'redux-thunk';
import  throttle  from 'lodash/throttle';
import { saveState, loadState } from "../components/helpers";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const persistedState  = loadState();

const store =  createStore(
    allReducers,
    persistedState,
    composeEnhancer(applyMiddleware(thunk))
);

store.subscribe(throttle(() => {
    saveState({
        podcasts: store.getState().podcasts
    })
}, 1000));

export default store;