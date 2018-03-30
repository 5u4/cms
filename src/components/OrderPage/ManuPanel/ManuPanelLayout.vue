<template>
    <v-container fill-height>
        <v-layout column>
            <!-- Title -->
            <v-flex xs1 style="text-align: left; margin: 0 15px">
                <h1>Menu</h1>
            </v-flex>
            <!-- Items -->
            <v-layout row wrap align-content-start>
                <v-flex xs3 style="margin: 7px 15px">
                    <MenuItem />
                </v-flex>
                <v-flex xs3 style="margin: 7px 15px">
                    <MenuItem />
                </v-flex>
                <v-flex xs3 style="margin: 7px 15px">
                    <MenuItem />
                </v-flex>
                <v-flex xs3 style="margin: 7px 15px">
                    <MenuItem />
                </v-flex>
            </v-layout>
        </v-layout>
    </v-container>
</template>

<script>
import MenuItem from './MenuItem/MenuItem';

export default {
    components: {
        MenuItem
    }
}
</script>

<style>

</style>
