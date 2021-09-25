const initialState={
    electricItem:[]
}
const electronicReducer=(state=initialState,action)=>{
    switch (action.type) {
        case 'ELECTRONIC':
            return {
                ...state,
                electricItem:action.payload
            }
    
        default:
            return state;
    }
}

export default electronicReducer