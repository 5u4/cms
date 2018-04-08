<template>
    <v-container fill-height :style="'backgroundColor: ' + this.$store.state.theme.mainColor">
        <v-layout column>
            <!-- Cart Title -->
            <v-flex xs1 style="text-align: left; margin: 0 15px">
                <h1>Cart</h1>
            </v-flex>
            <!-- Cart Items -->
            <CartItems />
            <!-- TotalPrice + Order -->
            <v-spacer></v-spacer>
            <v-flex xs1 style="margin: 5px 0">
                <v-card :color="this.$store.state.theme.cardColor">
                    <v-card-text>${{ totalPrice }}</v-card-text>
                    <v-btn flat block :disabled="totalPrice <= 0" @click="purchase()">
                        ORDER
                    </v-btn>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import CartItems from './CartItem/CartItems';
import { mapGetters } from 'vuex';

export default {
    components: {
        CartItems
    },
    computed: mapGetters({
        totalPrice: 'getTotalPrice'
    }),
    methods: {
        purchase() {
            this.$store.commit('toggleIsPurchasing');
        }
    }
}
</script>

<style>

</style>
