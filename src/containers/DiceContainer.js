import React from 'react';
import { connect } from 'react-redux';
import Die from '../components/DieComponent';

import './css/DiceContainer.css';

class DiceContainer extends React.Component {

    render() {
        let renderedDice = this.renderDice();
        return (
            <div className='dice-container'>
                {renderedDice}
            </div>
        );
    }

    renderDice = () => {
        let renderedDice;
        let currKey = 0;
        renderedDice = this.props.rollResults.map((roll) => <Die value={roll} key={currKey++} />);
        return renderedDice;
    }
}

let mapDispatchToProps = function (dispatch, props) {return {};}; //Not used

let mapStateToProps = function (state, props) {
    return {
        rollResults: state.rollResults,
        numRolls: state.rollSum
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DiceContainer);