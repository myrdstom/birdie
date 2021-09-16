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
