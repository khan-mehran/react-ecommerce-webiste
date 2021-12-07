const cartReducerState = {
    displayItems: 0,
    totalItems: 0,
    items: [] // {id, price (single product), quantity}
}

const cartReducer = (state = cartReducerState, action) => {
    // console.log(action.item.id)
    console.log(state)
    switch (action.type) {
        case 'ADD':
            return {
                ...state,
                items: state.items.map((item) => {
                    if (item.id != action.id) return item;
                    return {
                        ...item,
                        quantity: item.quantity + 1
                    }
                }),
                displayItems: state.displayItems + 1
            }
        case 'REMOVE':
            return {
                ...state,
                displayItems: state.displayItems - 1
            }
        case 'SETDISPLAY':
            return {
                ...state,
                displayItems: 0,
                totalItems: state.displayItems
            }
        default:
            return state;

    }
}
export default cartReducer;
