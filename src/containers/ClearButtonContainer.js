import React from 'react';
import { connect } from 'react-redux';

import clearRolls from '../actions/clearRollsAction';
import './css/ButtonContainer.css';

class ClearButton extends React.Component {

    render() {
        return (
            <button className='button clear-button' onClick={() => this.props.onClick()}>
                {"Clear Dice"}
            </button>
        );
    }
}

let mapDispatchToProps = function (dispatch, props) {
    return {
        onClick: () => {
            dispatch(clearRolls())
        }
    }
};

function mapStateToProps(state, props) {return {};}; //Not used

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ClearButton);