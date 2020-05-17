import { CounterInitialState } from '../../libs/state/counter/types';

interface CounterComponent {
    counter?: CounterInitialState;
    incrementCounter: (value: number) => void;
    decrementCounter: (value: number) => void;
};

export default CounterComponent;