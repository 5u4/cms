<template>
    <v-flex fill-height fluid>
        <v-jumbotron :style="'height: 100%; backgroundColor: ' + this.$store.state.theme.mainColor">
            <v-container>
                <v-layout column align-center>
                    <Logo style="position: fixed; top: 20em;"/>
                    <v-btn to="items" append style="position: relative; top: 38em;">
                        Start
                    </v-btn>
                </v-layout>
            </v-container>
        </v-jumbotron>
    </v-flex>
</template>

<script>
import Logo from '../Share/Logo';

export default {
    components: {
        Logo
    }
}
</script>

<style>

</style>
