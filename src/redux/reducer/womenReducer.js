const initialState = {
    womenItem: []
}

const womenReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'WOMEN_CLOTH':
            return {
                ...state,
                womenItem: action.payload
            }

        default:
            return state;
    }
}

export default womenReducer
