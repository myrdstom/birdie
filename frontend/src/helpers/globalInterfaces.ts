export interface SuccessEventsGenerator {
    events: [
        {
            count: number;
            event_type: string;
        }
    ];
}

export interface BaseAction {
    type: string;
    payload?: any;
}

export interface eventsData {
    event_type: string;
    count: number;
}

export interface actionInterface {
    type: 'GET_EVENT_TYPES';
    payload: 'test';
}
