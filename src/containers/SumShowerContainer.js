import React from 'react';
import { connect } from 'react-redux';

class SumShower extends React.Component {

    render() {
        return(
            <div className='sum-shower'>
                <h1>{"Sum: " + this.props.sum}</h1>
            </div>
        )
    }
}

let mapDispatchToProps = (dispatch, props) => {return {};}; //Not used

let mapStateToProps = (state, props) => {
    return {
        sum: state.rollSum
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SumShower);