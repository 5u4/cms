<template>
    <v-toolbar fixed flat height="50px" dark>
        <LogoWhite style="height: 40px; width: 130px"></LogoWhite>
        <v-spacer></v-spacer>
        <!-- Current User -->
        <v-icon>person</v-icon>
        Current User
        <!-- Login/Register -->
        <v-btn flat @click="toggleIsLogining()">
            Login/Register
        </v-btn>
        <!-- Logout -->
        <v-btn flat>
            Logout
        </v-btn>
    </v-toolbar>
</template>

<script>
import LogoWhite from './Logo';

export default {
    components: {
        LogoWhite
    },
    methods: {
        toggleIsLogining() {
            this.$store.commit('toggleIsLogining');
        }
    }
}
</script>

<style>

</style>
