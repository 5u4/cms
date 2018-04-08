<template>
    <v-dialog max-width="500px" v-model="isLogining">
        <v-tabs fixed-tabs centered height="30px" v-model="registering">
            <v-tab>
                Login
            </v-tab>
            <v-tab>
                Register
            </v-tab>
        </v-tabs>
        <Login v-if="registering == 0"></Login>
        <Register v-else></Register>
    </v-dialog>
</template>

<script>
import Login from './Login/LoginModal';
import Register from './Register/RegisterModal';

export default {
    data() {
        return {
            registering: 0
        }
    },
    components: {
        Login,
        Register
    },
    computed: {
        isLogining: {
            get: function() {
                return this.$store.getters.isLogining;
            },
            set: function() {
                this.$store.commit('toggleIsLogining');
            }
        }
    }
}
</script>

<style>

</style>
