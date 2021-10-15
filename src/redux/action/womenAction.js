const fetchWomen=()=> async (dispatch) =>{
    const response = await fetch(`https://fakestoreapi.com/products/category/women's clothing?limit=4`)
    const postWomen = await response.json();
    dispatch(womenClothes(postWomen))
}

const womenClothes=(postWomen)=>{
    return{
        type:'WOMEN_CLOTH',
        payload:postWomen
    }
}
// eslint-disable-next-line 
export default {
    fetchWomen,
    womenClothes
}