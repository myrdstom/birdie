import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store/combineStore';
import EventView from './views/Events';

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <EventView />
            </div>
        </Provider>
    );
}

export default App;
