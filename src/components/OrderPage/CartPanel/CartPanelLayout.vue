<template>
    <v-container fill-height style="backgroundColor: #80CBC4">
        <v-layout column>
            <!-- Cart Title -->
            <v-flex xs1 style="text-align: left; margin: 0 15px">
                <h1>Cart</h1>
            </v-flex>
            <!-- Cart Items -->
            <v-flex xs1 style="margin: 5px 0">
                <CartItem></CartItem>
            </v-flex>
            <v-flex xs1 style="margin: 5px 0">
                <CartItem></CartItem>
            </v-flex>
            <!-- TotalPrice + Order -->
            <v-spacer></v-spacer>
            <v-flex xs1 style="margin: 5px 0">
                <v-card color="teal lighten-5">
                    <v-card-text>$20</v-card-text>
                    <v-btn flat block>ORDER</v-btn>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import CartItem from './CartItem/CartItem';

export default {
    components: {
        CartItem
    }
}
</script>

<style>

</style>
