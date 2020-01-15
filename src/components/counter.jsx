import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';

const Counter = ({counter, inc, dec, rnd}) => {
    return (
        <React.Fragment>
            <h2 id="counter"></h2>
            <button
                id="dec"
                className="btn btn-primary btn-large mr-1"
                onClick={dec}
                >
                DEC
                </button>
            <button
                id="inc"
                className="btn btn-primary btn-large mr-1"
                onClick={inc}
                >
                INC
                </button>
            <button
                id="rnd"
                className="btn
                btn-primary
                btn-large"
                onClick={rnd}
                >
                RND
                </button>
            <div id="result" className="mt-3">{counter}</div>
        </React.Fragment>
    )
}

const mapStateToProps = (state) => {
    return {
        counter: state
    }
}

const mapDispatchToProps = (dispatch) => {
    const { inc, dec, rnd } = bindActionCreators(actions, dispatch);
    return {
        inc,
        dec,
        rnd: () => {
            const payload = Math.floor(Math.random() * 10);
            rnd(payload);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);