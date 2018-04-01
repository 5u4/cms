<template>
    <v-container fill-height fluid row>
        <v-layout row>
            <v-flex xs2 style="height: 45px">
                <!-- <img :src="Apple" style="height: 100%; width: auto;"/> -->
            </v-flex>
            <!-- Description -->
            <v-flex xs5 offset-xs1>
                <v-layout column>
                    <v-flex>
                        {{ item.name }}
                    </v-flex>
                    <v-flex>
                        <v-layout row>
                            <v-flex class="py-1">
                                <v-btn-toggle>
                                    <v-btn xs1 small flat :disabled="item.quantity <= 0" @click="updateCartQuantity(-1)"><v-icon>remove</v-icon></v-btn>
                                    <v-btn xs1 small flat disabled><span class="black--text">{{ item.quantity }}</span></v-btn>
                                    <v-btn xs1 small flat @click="updateCartQuantity(1)"><v-icon>add</v-icon></v-btn>
                                </v-btn-toggle>
                            </v-flex>
                        </v-layout>
                    </v-flex>
                </v-layout>
            </v-flex>
            <!-- Price -->
            <v-flex xs2>
                <v-btn-toggle class="py-2">
                    <v-btn xs1 small flat disabled><span class="black--text">${{ itemTotalPrice }}</span></v-btn>
                </v-btn-toggle>
            </v-flex>
            <!-- Delete -->
            <v-flex xs1 offset-xs1>
                <v-btn-toggle class="py-1">
                    <v-btn flat @click="removeItem()">
                        <v-icon>close</v-icon>
                    </v-btn>
                </v-btn-toggle>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    /* item: {id: Number, name: String, price: Number, quantity: Number} */
    props: {
        item: Object
    },
    computed: {
        itemTotalPrice() {
            return (this.item.price * this.item.quantity).toFixed(2);
        }
    },
    methods: {
        updateCartQuantity(quantity) {
            this.$store.commit('updateCartItemQuantity', {
                quantity: quantity,
                item: this.item,//this.getCartItems[cartIndex],
            });
        },
        removeItem() {
            this.$store.commit('removeCartItem', {item: this.item});
        }
    }
}
</script>

<style>

</style>
