<template>
    <v-btn :to="toLink">
        <slot></slot>
    </v-btn>
</template>

<script>
export default {
    props: {
        toLink: String
    }
}
</script>

<style>

</style>
