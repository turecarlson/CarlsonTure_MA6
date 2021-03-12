import React from 'react';
import './css/DieComponent.css';
export default class Die extends React.Component {

    render() {
        return (
            <div className='die'>{this.props.value}</div>
        );
    }
}