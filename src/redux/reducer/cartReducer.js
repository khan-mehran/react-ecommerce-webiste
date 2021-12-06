const cartReducerState = {
    totalItems: 0,
    
}

const cartReducer = (state = cartReducerState, action) => {
    switch (action.type) {
        case 'ADD':
            return {
                ...state,
                totalItems: state.totalItems + 1
            }
        case 'REMOVE':
            return {
                ...state,
                totalItems: state.totalItems - 1
            }
        default:
            return state;

    }
}
export default cartReducer;
