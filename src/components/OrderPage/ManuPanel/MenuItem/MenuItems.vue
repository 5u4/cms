<template>
    <v-layout row wrap align-content-start>
        <v-flex v-for="item in getMenuItems" :key="item.id" xs3 style="margin: 7px 15px" @click="addMenuItemIntoCart(item.id)">
            <MenuItem :name="item.name" :price="item.price.toFixed(2)" />
        </v-flex>
    </v-layout>
</template>

<script>
import { mapGetters } from 'vuex';
import MenuItem from './MenuItem';

export default {
    computed: mapGetters({
        getMenuItems: 'getMenuItems',
        getCartItems: 'getCartItems',
    }),
    components: {
        MenuItem
    },
    methods: {        
        addMenuItemIntoCart(id) {
            /* Get Indices */
            const menuIndex = this.$store.state.menuItems.map(item => item.id).findIndex(itemId => id == itemId);
            const cartIndex = this.$store.state.cartItems.map(item => item.id).findIndex(itemId => id == itemId);

            /* Exists in cart; update */
            if (cartIndex >= 0) {
                this.$store.commit('updateCartItemQuantity', {
                    quantity: 1,
                    item: this.getCartItems[cartIndex],
                    itemPrice: this.getMenuItems[menuIndex].price
                });
            }

            /* Not exists; push */
            else {
                this.$store.commit('pushMenuItemIntoCartItems', {
                    id: id, 
                    name: this.getMenuItems[menuIndex].name,
                    price: this.getMenuItems[menuIndex].price,
                    quantity: 1
                });
            }
        }
    }
}
</script>

<style>

</style>
