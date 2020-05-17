import {
    INCREMENT_COUNTER,
    DECREMENT_COUNTER
} from './constants';
import {
    IncrementCounter,
    DecrementCounter
} from './types';

export const incrementCounter: IncrementCounter = (value) => ({
    type: INCREMENT_COUNTER,
    payload: {
        value
    }
});

export const decrementCounter: DecrementCounter = (value) => ({
    type: DECREMENT_COUNTER,
    payload: {
        value
    }
});