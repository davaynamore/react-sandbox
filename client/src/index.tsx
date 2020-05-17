import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/';
import {
    BrowserRouter as Router
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './libs/state/store';
import './global.scss';


ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <Router>
                <App />
            </Router>
        </React.StrictMode>
    </Provider>,
    document.getElementById('root')
);