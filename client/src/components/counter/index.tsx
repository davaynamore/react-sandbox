import React from 'react';
import {
    incrementCounter,
    decrementCounter
} from '../../libs/state/counter/actions';
import { connect } from 'react-redux';
import CounterComponent from './types';
import counterInitialState from '../../libs/state/counter/initial';
import './styles.scss';


const Counter: React.FC<CounterComponent> = ({
    counter: {
        counter
    } = counterInitialState,
    incrementCounter,
    decrementCounter
}): JSX.Element => {
    const value = 1;

    const handleIncClick = (): void => {
        incrementCounter(value);
    };

    const handleDecClick = (): void => {
        decrementCounter(value);
    };

    return (
        <div className="counter">
            <button
                className="counter__button"
                type="button"
                onClick={handleIncClick}
            >
                INC
            </button>
            <button
                className="counter__button"
                type="button"
                onClick={handleDecClick}
            >
                DEC
            </button>
            <div className="counter__value">
                {counter}
            </div>
        </div>
    );
};

export default connect((state) => state, {
    incrementCounter,
    decrementCounter
})(Counter);