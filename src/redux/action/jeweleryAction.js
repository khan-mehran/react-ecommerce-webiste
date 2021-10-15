const fetchJewelery =()=> async (dispatch)=>{
    const response = await fetch(`https://fakestoreapi.com/products/category/jewelery?limit=4`)
    const postJewelery = await response.json()
    dispatch(jewelery(postJewelery))
}
const jewelery=(postJewelery)=>{
    return{
        type:'JEWELERY',
        payload:postJewelery
    }
}
// eslint-disable-next-line 
export default {
    fetchJewelery,
    jewelery
}