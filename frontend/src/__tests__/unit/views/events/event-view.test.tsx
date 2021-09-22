import React from 'react';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import EventView from '../../../../views/Events';
import EventDetails from '../../../../views/Events/event-details';
import { RenderWithRouterMatch } from '../../../setup';
import { events } from '../../../__mocks__/events-view';

describe('Event View Tests', () => {
    afterEach(cleanup);
    test('Filter component is rendered', () => {
        const expectedTerm = "Please input your visitor ID to view a summary of your patient's event chart";
        const { getByText } = render(
            <RenderWithRouterMatch>
                <EventView />
            </RenderWithRouterMatch>
        );
        getByText(expectedTerm);
    });
    test('Pie chart is not rendered by default', async () => {
        const { getByTestId } = render(
            <RenderWithRouterMatch>
                <EventView />
            </RenderWithRouterMatch>
        );
        const visitId = getByTestId('input-visit-id') as HTMLInputElement;

        fireEvent.change(visitId, { target: { value: 'test' } });
        expect(visitId.value).toBe('test');
        fireEvent.keyPress(visitId, { key: 'Enter', charCode: 13 });
        const pieChart = screen.queryByText('Events');
        expect(pieChart).toBeNull();
    });
    test('Pie chart is rendered', () => {
        render(
            <RenderWithRouterMatch>
                <EventDetails events={events} />
            </RenderWithRouterMatch>
        );
        const pieChart = screen.queryByText('Events');
        expect(pieChart).toBeTruthy();
    });
});
