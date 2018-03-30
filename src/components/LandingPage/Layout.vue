<template>
    <v-flex fill-height fluid>
        <Jumbotron>
            <v-container>
                <v-layout column align-center>
                    <Logo style="position: relative; top: 30em;"/>
                    <Button toLink="order" style="position: relative; top: 38em;">Start Order</Button>
                </v-layout>
            </v-container>
        </Jumbotron>
    </v-flex>
</template>

<script>
import Logo from '../Share/Logo';
import Button from '../Share/Button';
import Jumbotron from '../Share/Jumbotron';

export default {
    components: {
        Logo,
        Button,
        Jumbotron
    }
}
</script>

<style>

</style>
