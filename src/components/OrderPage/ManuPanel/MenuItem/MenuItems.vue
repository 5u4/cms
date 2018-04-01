<template>
    <v-layout row wrap align-content-start>
        <v-flex v-for="item in MenuItems" :key="item.id" xs3 style="margin: 7px 15px">
            <MenuItem :name="item.name" :price="item.price" />
        </v-flex>
    </v-layout>
</template>

<script>
import { mapGetters } from 'vuex';
import MenuItem from './MenuItem';

export default {
    computed: mapGetters({
        MenuItems: 'getMenuItems'
    }),
    components: {
        MenuItem
    }
}
</script>

<style>

</style>
