const cartAction = (type, item) => { //ADD | REMOVE
    return {
        type: type,
        item: item
    }
}
export const setDisplay = () => ({ type: 'SETDISPLAY' })
export default cartAction;
