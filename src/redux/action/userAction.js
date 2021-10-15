const fetchUser =()=> async (dispatch) =>{
    const response = await fetch(`https://fakestoreapi.com/products/category/men's clothing?limit=4`)
    const postUser = await response.json();
    dispatch(requestUser(postUser)) 
}

const requestUser =(postUser)=>{
    return {
        type:'GET_DATA',
        payload:postUser
    }
}

// eslint-disable-next-line 
export default {
    fetchUser,
    requestUser,
}