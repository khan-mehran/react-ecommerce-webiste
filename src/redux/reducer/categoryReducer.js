const initialState = {
    categoryItem: []
}

const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CATOGREY':
            return {
                ...state,
                categoryItem: action.payload
            }

        default:
            return state;
    }

}
export default categoryReducer
