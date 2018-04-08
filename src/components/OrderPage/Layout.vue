<template>
    <v-flex fill-height fluid>
        <Navigator></Navigator>
        <v-layout row fill-height style="margin-top: 50px">
            <!-- Left Panel -->
            <v-flex xs12 sm12 md8 lg9 xl10>
                <MenuPanel></MenuPanel>
            </v-flex>
            <!-- Right Panel -->
            <v-flex md4 lg3 xl2>
                <CartPanel></CartPanel>
            </v-flex>
            <OrderModal></OrderModal>
            <Auth></Auth>
        </v-layout>
    </v-flex>
</template>

<script>
import MenuPanel from './ManuPanel/ManuPanelLayout';
import CartPanel from './CartPanel/CartPanelLayout';
import OrderModal from './OrderModal/OrderModalLayout';
import Navigator from './Navigator/Navigator';
import Auth from './AuthorizationModal/AuthorizationLayout';

export default {
    components: {
        MenuPanel,
        CartPanel,
        OrderModal,
        Navigator,
        Auth
    }
}
</script>

<style>

</style>
