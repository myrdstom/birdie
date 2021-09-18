import React, { useState, KeyboardEvent, ChangeEvent } from 'react';
import { Container, Grid } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { getEvents } from '../../redux/actions/types';
import FilterByVisitId from './filter-by-visit-id';
import EventDetails from './event-details';
import { DEFAULT_VISIT_ID, ENTER } from '../../constants/constants';
import { eventsData } from '../../helpers/globalInterfaces';
import { useStyles } from './eventStyles';

interface stateProps {
    eventType: {
        events: {
            events: eventsData[] | null;
        };
        error: {
            message: string;
        };
    };
}

const EventView = () => {
    const [visitId, setVisitId] = useState(DEFAULT_VISIT_ID);
    const classes = useStyles();
    const dispatch = useDispatch();
    const { events, error } = useSelector((state: stateProps) => state.eventType);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => setVisitId(e.target.value);

    const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === ENTER && visitId !== DEFAULT_VISIT_ID) {
            dispatch(getEvents(visitId));
        } else if (e.key === ENTER && visitId === DEFAULT_VISIT_ID) {
            console.warn('please input something');
        }
    };

    return (
        <Container component="main" maxWidth="sm">
            <Grid
                className={classes.grid}
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
            >
                <FilterByVisitId handleKeyPress={handleKeyPress} visitId={visitId} handleChange={handleChange} />
                <br />
                {Array.isArray(events) ? (
                    <EventDetails events={events} />
                ) : (
                    <div className={classes.error}>{error?.message}</div>
                )}
            </Grid>
        </Container>
    );
};

export default EventView;
