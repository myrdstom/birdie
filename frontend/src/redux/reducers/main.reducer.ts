import { combineReducers } from 'redux';
import eventTypeReducer from './eventType.reducer';

const mainReducer = combineReducers({
    eventType: eventTypeReducer
});
export default mainReducer;
