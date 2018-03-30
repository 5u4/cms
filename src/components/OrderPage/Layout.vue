<template>
    <v-flex fill-height fluid>
        <v-layout row fill-height>
            <!-- Left Panel -->
            <v-flex xs12 sm12 md8 lg9 xl10>
                <MenuPanel></MenuPanel>
            </v-flex>
            <!-- Right Panel -->
            <v-flex md4 lg3 xl2>
                <CartPanel></CartPanel>
            </v-flex>
        </v-layout>
    </v-flex>
</template>

<script>
import MenuPanel from './ManuPanel/ManuPanelLayout';
import CartPanel from './CartPanel/CartPanelLayout';

export default {
    components: {
        MenuPanel,
        CartPanel
    }
}
</script>

<style>

</style>
