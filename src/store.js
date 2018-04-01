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
            {id: 1, name: 'apple', price: 3, quantity: 2}
        ]
    },
    getters: {
        getMenuItems(state) {
            return state.menuItems;
        },
        getCartItems(state) {
            return state.cartItems;
        }
    }
});

export default store;
