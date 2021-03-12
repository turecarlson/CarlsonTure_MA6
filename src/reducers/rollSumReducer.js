export default function rollSum(state = 0, action) {
    switch (action.type) {
        case "ADD":
            return state + action.value;
        case "CLEAR":
            return 0;
        default:
            return state;
    }
}