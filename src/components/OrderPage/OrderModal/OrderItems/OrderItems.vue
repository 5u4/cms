<template>
    <v-container>
        <v-layout row wrap>
            <v-flex xs5 style="margin: 3px 10px" v-for="item in cartItems" :key="item.id">
                <OrderItem :item="item" />
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import { mapGetters } from 'vuex';
import OrderItem from './OrderItem';

export default {
    components: {
        OrderItem
    },
    computed: mapGetters({
        cartItems: 'getCartItems'
    })
}
</script>

<style>

</style>
