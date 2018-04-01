import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        menuItems: [
            {id: 1, name: 'apple', price: 3},
            {id: 2, name: 'pear', price: 2.7},
            {id: 3, name: 'grape', price: 5},
            {id: 4, name: 'pineapple', price: 4.5},
            {id: 5, name: 'carrot', price: 2.8},
            {id: 6, name: 'banana', price: 3.2}
        ],
        cartItems: [
            {id: 1, name: 'apple', price: 3, quantity: 2},
            {id: 3, name: 'grape', price: 5, quantity: 1}
        ]
    },
    getters: {
        getMenuItems(state) {
            return state.menuItems;
        },
        getCartItems(state) {
            return state.cartItems;
        },
        getTotalPrice(state) {
            return state.cartItems.map(item => item.price * item.quantity).reduce((a, b) => a + b).toFixed(2);
        }
    },
    mutations: {
        /* payload: {quantity: Number, item: cartItem} */
        updateCartItemQuantity(state, payload) {
            if (payload.item.quantity + payload.quantity <= 0) {
                payload.item.quantity = 0;
            } else {
                payload.item.quantity += payload.quantity;
            }
        },
        /* payload: {id: Number, name: String, price: Number, quantity: Number} */
        pushMenuItemIntoCartItems(state, payload) {
            state.cartItems.push({
                id: payload.id,
                name: payload.name,
                price: payload.price,
                quantity: payload.quantity
            });
        },
        /* payload: {item: cartItem} */
        removeCartItem(state, payload) {

        }
    }
});

export default store;
