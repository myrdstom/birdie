import eventTypeReducer, { initialState } from '../../../redux/reducers/eventType.reducer';
import { GET_EVENTS_SUCCESS, GET_EVENTS_FAILURE } from '../../../redux/actions/types';
import { responseError, reducerSuccessEvent, reducerFailureEvent, events } from '../../__mocks__/events';

describe('events reducer', () => {
    it('Should handle GET_EVENTS_SUCCESS', () => {
        const action = {
            type: GET_EVENTS_SUCCESS,
            payload: events
        };
        expect(eventTypeReducer(initialState, action)).toEqual(reducerSuccessEvent);
    });

    it('Should handle GET_EVENTS_FAILURE', () => {
        const failAction = {
            type: GET_EVENTS_FAILURE,
            payload: responseError
        };
        expect(eventTypeReducer(initialState, failAction)).toEqual(reducerFailureEvent);
    });
});
