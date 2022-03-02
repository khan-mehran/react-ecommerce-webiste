const cartReducerState = {
    displayItems: 0,
    totalItems: 0,
    items: [] // {id, price (single product), description, quantity, image}
}

const cartReducer = (state = cartReducerState, action) => {
    console.log(action.item, 999999999)
    console.log(state)
    switch (action.type) {
        case 'ADD':
            const itemIndex = state.items.findIndex((item) => item.id == action.item.id);

            if (itemIndex == -1) {

                return {
                    ...state,
                    displayItems: state.displayItems + 1,
                    items: [...state.items, { id: action.item.id, price: action.item.price, description: action.item.description, quantity: 1, image: action.item.image }]
                }
            }

            return {
                ...state,
                items: state.items.map((item) => {
                    if (item.id != action.item.id) return item;
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
