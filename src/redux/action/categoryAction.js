const fetchCategory=()=> async (dispatch)=>{
        const response = await fetch(`https://fakestoreapi.com/products`)
        const categoryPost = await response.json()
        dispatch(categoryResponse(categoryPost))
}

const categoryResponse=(categoryPost)=>{
    return{
        type:'CATOGREY',
        payload:categoryPost
    }
}
// eslint-disable-next-line 
export default {
    fetchCategory,
    categoryResponse
}