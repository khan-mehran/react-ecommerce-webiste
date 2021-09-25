

const initialState ={
    userItem:[],
}

const userReducer=(state=initialState,action)=>{
    switch (action.type) {
        case 'GET_DATA':
            return {
                ...state,
                userItem:action.payload
            }
    
        default:
            return state;
    }
}
 

export default userReducer 