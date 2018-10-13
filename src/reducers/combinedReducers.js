import { combineReducers } from 'redux';
import appReducer from './appReducer';

const combinedReducers = combineReducers({
    appReducer
});

export default combinedReducers;