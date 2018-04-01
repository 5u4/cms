<template>
    <v-card hover height="75px" color="teal lighten-5">
        <v-container fill-height fluid row>
            <v-layout row>
                <!-- Item Pic -->
                <v-flex xs3 style="height: 45px; width: auto;">
                    <v-card-media src="Apple"></v-card-media>
                </v-flex>
                <v-flex xs8>
                    <v-layout column>
                        <v-flex>
                            {{ name }}
                        </v-flex>
                        <v-flex>
                            {{ price }}
                        </v-flex>
                    </v-layout>
                </v-flex>
            </v-layout>
        </v-container>
    </v-card>
</template>

<script>

export default {
    props: {
        name: String,
        price: Number
    }
}
</script>

<style>

</style>
