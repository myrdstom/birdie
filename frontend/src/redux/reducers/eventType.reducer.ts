import { GET_EVENTS_SUCCESS } from '../actions/types';
import { BaseAction } from '../../helpers/globalInterfaces';

export const initialState = {
    events: null,
    loading: true
};

const eventTypeReducer = (state = initialState, action: BaseAction) => {
    switch (action.type) {
        case GET_EVENTS_SUCCESS:
            return {
                ...state,
                events: action.payload,
                loading: false
            };

        default:
            return state;
    }
};

export default eventTypeReducer;
