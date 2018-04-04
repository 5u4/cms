<template>
    <v-card flat>
        <v-layout row>
            <!-- Icon -->
            <v-flex xs2>
                <v-card-media>
                    
                </v-card-media>
            </v-flex>
            <!-- Name -->
            <v-flex xs3>
                <v-card-text>
                    {{ item.name }}
                </v-card-text>
            </v-flex>
            <!-- Quantity -->
            <v-flex xs2 offset-xs1>
                <v-card-text>
                    ×{{ item.quantity }}
                </v-card-text>
            </v-flex>
            <!-- Price -->
            <v-flex xs2>
                <v-card-text>
                    ${{ calculatedPrice }}
                </v-card-text>
            </v-flex>
        </v-layout>
    </v-card>
</template>

<script>
export default {
    props: {
        item: Object
    },
    computed: {
        calculatedPrice() {
            return (this.item.quantity * this.item.price).toFixed(2);
        }
    }
}
</script>

<style>

</style>
