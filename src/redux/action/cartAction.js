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
export default {
    increment,
    decrement
}