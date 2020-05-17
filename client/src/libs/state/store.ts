import {
    applyMiddleware,
    createStore
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import appInitialState from './initial';
import rootReducer from './root';
import thunk from 'redux-thunk';


const store = createStore(
    rootReducer,
    appInitialState,
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;