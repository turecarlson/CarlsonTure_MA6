import { combineReducers } from 'redux';
import rollResults from '../reducers/rollResultReducer';
import rollSum from '../reducers/rollSumReducer';

export default combineReducers({
    //see https://gist.github.com/hunterjorgensen167/6dc8685dadb1f0b51c6828ab137c3ca4
    rollResults: rollResults,
    rollSum: rollSum, 
});