<template>
    <v-jumbotron :src="FoodImage" style="height: 100%">
        <slot></slot>
    </v-jumbotron>
</template>

<script>
import FoodImage from '../../assets/jumbotron.jpg';

export default {
    data() {
        return {
            FoodImage
        }
    }
}
</script>

<style>

</style>
