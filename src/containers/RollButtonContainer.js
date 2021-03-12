import React from 'react';
import { connect } from 'react-redux';

import addRoll from '../actions/addRollAction';
import './css/ButtonContainer.css';


class RollButton extends React.Component {

    render() {
        return (
            <button className='button roll-button' onClick={this.handleClick}>
                {"Roll Dice"}
            </button>
        );
    }

    /**
     * Defines behavior for button click. Rolls a random number from 1-6, 
     * then adds a new die to our list of dice.
     */
    handleClick = () => {
        let rollResult = this.rollDie(6);
        this.props.onClick(rollResult);
    }

    /**
     * Rolls an 'n' sided die and returns the result
     * @param {number} n the number of sides to the die
     * @returns the number 'rolled' by the 'die'
     */
    rollDie(n) {
        return Math.floor(Math.random() * (n - 1)) + 1;
    }

}

let mapDispatchToProps = function (dispatch, props) {
    return {
        onClick: (val) => {
            dispatch(addRoll(val))
        }
    }
};

function mapStateToProps(state, props) {return {}}; //Not used

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RollButton)