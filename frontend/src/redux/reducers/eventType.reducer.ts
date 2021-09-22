import { GET_EVENTS_SUCCESS, GET_EVENTS_FAILURE } from '../actions/types';
import { BaseAction } from '../../helpers/globalInterfaces';

export const initialState = {
    events: null,
    loading: true,
    error: null
};

const eventTypeReducer = (state = initialState, action: BaseAction) => {
    switch (action.type) {
        case GET_EVENTS_SUCCESS:
            return {
                ...state,
                events: action.payload.events,
                loading: false,
                error: null
            };

        case GET_EVENTS_FAILURE:
            return {
                ...state,
                events: null,
                loading: false,
                error: action.payload.response.data
            };

        default:
            return state;
    }
};

export default eventTypeReducer;
