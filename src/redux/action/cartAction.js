const increment =() =>{
    console.log()
    return {
        type: 'ADD',
    }
}
const decrement =()=>{
    return{
        type: 'REMOVE',
    }
}
// eslint-disable-next-line 
export default {
    increment,
    decrement
}