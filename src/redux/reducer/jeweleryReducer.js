const initialState = {
    jeweleryItem: []
}
const jeweleryReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'JEWELERY':
            return {
                ...state,
                jeweleryItem: action.payload
            }

        default:
            return state;
    }
}

export default jeweleryReducer
