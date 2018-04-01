<template>
    <v-layout row wrap align-content-start>
        <v-flex v-for="item in getMenuItems" :key="item.id" xs3 style="margin: 7px 15px" >
            <MenuItem :item="item" />
        </v-flex>
    </v-layout>
</template>

<script>
import { mapGetters } from 'vuex';
import MenuItem from './MenuItem';

export default {
    computed: mapGetters({
        getMenuItems: 'getMenuItems',
        getCartItems: 'getCartItems',
    }),
    components: {
        MenuItem
    }
}
</script>

<style>

</style>
