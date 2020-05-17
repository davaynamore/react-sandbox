import {
    INCREMENT_COUNTER,
    DECREMENT_COUNTER
} from './constants';
import { ReducerMapValue } from 'redux-actions';


export interface CounterInitialState {
    counter: number;
};

export interface CounterPayload {
    value: number;
};

export interface IncrementCounter {
    (value: number): {
        type: 'INCREMENT_COUNTER';
        payload: CounterPayload;
    };
};

export interface DecrementCounter {
    (value: number): {
        type: 'DECREMENT_COUNTER';
        payload: CounterPayload;
    };
};

export type CounterReducerMapValue<T> = ReducerMapValue<CounterInitialState, T>;

export interface CounterActions {
    [index: string]: CounterReducerMapValue<any>;

    [INCREMENT_COUNTER]: CounterReducerMapValue<CounterPayload>;
    [DECREMENT_COUNTER]: CounterReducerMapValue<CounterPayload>;
};