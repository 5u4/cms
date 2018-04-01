<template>
        <v-flex xs10>
            <v-card v-for="item in CartItems" :key="item.id" hover height="75px" style="margin: 10px 0">
                <CartItem :item="item" />
            </v-card>
        </v-flex>
</template>

<script>
import { mapGetters } from 'vuex';
import CartItem from './CartItem';

export default {
    computed: mapGetters({
        CartItems: 'getCartItems',
    }),
    components: {
        CartItem
    }
}
</script>

<style>

</style>
