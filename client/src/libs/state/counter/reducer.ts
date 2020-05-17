import { CounterActions } from './types';
import {
    INCREMENT_COUNTER,
    DECREMENT_COUNTER
} from './constants';
import { handleActions } from 'redux-actions';
import counterInitialState from './initial';


const counterReducerMap: CounterActions = {
    [INCREMENT_COUNTER]: (state, { payload: { value } }) => ({
        ...state,
        counter: state.counter + value
    }),

    [DECREMENT_COUNTER]: (state, { payload: { value } }) => {
        const { counter } = state;
        if (counter === 0) {
            return ({
                ...state
            });
        }

        return ({
            ...state,
            counter: counter - value
        });
    }
};


const counterReducer = handleActions(counterReducerMap, counterInitialState);

export default counterReducer;