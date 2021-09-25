const fetchElectronic =()=> async (dispatch)=>{
    const response = await fetch(`https://fakestoreapi.com/products/category/electronics?limit=4`)
    const postElectric = await response.json()
    dispatch(eclctronics(postElectric))
}
const eclctronics=(postElectric)=>{
    return{
        type:'ELECTRONIC',
        payload:postElectric
    }
}

export default {
    fetchElectronic,
    eclctronics
}