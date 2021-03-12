export default function rollResult(state = [], action) {
    switch (action.type) {
        case 'ADD':
            state.push(action.value);
            return state;
        case 'CLEAR':
            state = [];
            return state;
        default:
            return state;
    }
}