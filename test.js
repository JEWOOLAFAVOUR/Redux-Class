const redux = require("redux");
const createStore = redux.createStore;

const initialState = {
    cake: 20,
}

const orderCake = () => {
    return {
        type: "ORDER_CAKE",
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ORDER_CAKE":
            return {
                ...state,
                cake: state.cake - 2,
            }
        default:
            return state;
    }
}


const store = createStore(reducer);

console.log('Initial state', store.getState())

store.subscribe(() => {
    console.log('Updated state', store.getState())
})

store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(orderCake())