<template>
    <v-container fill-height>
        <v-layout column>
            <!-- Title -->
            <v-flex xs1 style="text-align: left; margin: 0 15px">
                <h1>Menu</h1>
            </v-flex>
            <!-- Items -->
            <MenuItems />
        </v-layout>
    </v-container>
</template>

<script>
import MenuItems from './MenuItem/MenuItems';

export default {
    components: {
        MenuItems
    }
}
</script>

<style>

</style>
