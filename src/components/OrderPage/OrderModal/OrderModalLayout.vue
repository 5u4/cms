<template>
    <v-dialog max-width="500px" v-model="isPurchasing">
        <v-card>
            <v-card-title>
                Orders
            </v-card-title>
            <v-card-text>
                <OrderItems></OrderItems>
            </v-card-text>
            <v-card-text>
                Total Price: ${{ totalPrice }}
            </v-card-text>
            <v-btn color="success">
                Confirm Order
            </v-btn>
        </v-card>
    </v-dialog>
</template>

<script>
import { mapGetters } from 'vuex';
import OrderItems from './OrderItems/OrderItems';

export default {
    components: {
        OrderItems
    },
    computed: {
        ...mapGetters({
            totalPrice: 'getTotalPrice'
        }),
        isPurchasing: {
            get: function() {
                return this.$store.getters.isPurchasing;
            },
            set: function() {
                this.$store.commit('toggleIsPurchasing');
            }
        }
    }
}
</script>

<style>

</style>
