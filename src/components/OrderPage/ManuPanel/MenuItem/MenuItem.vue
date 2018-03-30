<template>
    <v-card hover height="75px" color="teal lighten-5">
        <v-container fill-height fluid row>
            <v-layout row>
                <!-- Item Pic -->
                <v-flex xs3 style="height: 45px; width: auto; backgroundColor: red">
                    <v-card-media src="Apple"></v-card-media>
                </v-flex>
                <v-flex xs8>
                    <v-layout column>
                        <v-flex>
                            Apple
                        </v-flex>
                        <v-flex>
                            $10
                        </v-flex>
                    </v-layout>
                </v-flex>
            </v-layout>
        </v-container>
    </v-card>
</template>

<script>
import Apple from '../../../../assets/apple.png';

export default {
    data() {
        return {
            Apple
        }
    }
}
</script>

<style>

</style>
