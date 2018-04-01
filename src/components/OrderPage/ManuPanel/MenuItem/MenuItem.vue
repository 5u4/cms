<template>
    <v-card hover height="75px" color="teal lighten-5">
        <v-container fill-height fluid row @click="addMenuItemIntoCart()">
            <v-layout row>
                <!-- Item Pic -->
                <v-flex xs3 style="height: 45px; width: auto;">
                    <v-card-media src="Apple"></v-card-media>
                </v-flex>
                <v-flex xs8>
                    <v-layout column>
                        <v-flex>
                            {{ item.name }}
                        </v-flex>
                        <v-flex>
                            ${{ item.price.toFixed(2) }}
                        </v-flex>
                    </v-layout>
                </v-flex>
            </v-layout>
        </v-container>
    </v-card>
</template>

<script>

export default {
    props: {
        item: Object
    },
    methods: {
        addMenuItemIntoCart() {
            /* Get Indices */
            const cartIndex = this.$store.state.cartItems.map(item => item.id).findIndex(itemId => this.item.id == itemId);

            /* Exists in cart; update */
            if (cartIndex >= 0) {
                this.$store.commit('updateCartItemQuantity', {
                    quantity: 1,
                    item: this.$store.state.cartItems[cartIndex]
                });
            }

            /* Not exists; push */
            else {
                this.$store.commit('pushMenuItemIntoCartItems', {
                    id: this.item.id, 
                    name: this.item.name,
                    price: this.item.price,
                    quantity: 1
                });
            }
        }
    }
}
</script>

<style>

</style>
