const redux = require('redux');
const createStore = redux.createStore;

// INITIAL STORE 
const initialState = {
    cake: 10,
    wine: 5,
    iceCream: 15,
    smallChop: 7,
};

// ACTION CREATOR
const orderCake = () => {
    return {
        type: "ORDER_CAKE",
    }
}


const reducer = (state = initialState, action) => {
    const { type, cake, wine } = action;

    switch (type) {
        case "ORDER_CAKE":
            return {
                ...state,
                cake: state.cake - 1
            }

        default:
            return state;
    }
}


const store = createStore(reducer);

console.log('initial state', store.getState())

store.subscribe(() => {
    console.log("updated state", store.getState())
})

// console.log('updated state', orderCake())

store.dispatch(orderCake())