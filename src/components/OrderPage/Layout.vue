<template>
    <v-flex fill-height fluid>
        <v-layout row fill-height>
            <!-- Left Panel -->
            <v-flex xs12 sm12 md8 lg9 xl10></v-flex>
            <!-- Right Panel -->
            <v-flex md4 lg3 xl2>
                <CartPanel></CartPanel>
            </v-flex>
        </v-layout>
    </v-flex>
</template>

<script>
import CartPanel from './CartPanel/CartPanelLayout';

export default {
    components: {
        CartPanel
    }
}
</script>

<style>

</style>
