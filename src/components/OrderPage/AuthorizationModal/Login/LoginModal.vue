<template>
    <v-card flat>
        <v-container>
            <v-form lazy-validation v-model="valid" ref="form">
                <!-- Username/Email -->
                <v-layout row>
                    <v-flex xs10>
                        <v-text-field 
                            v-if="usingUsername" 
                            v-model="username" 
                            :rules="usernameRules"
                            label="username" 
                            required>
                        </v-text-field>
                        <v-text-field 
                            v-else label="email" 
                            v-model="email" 
                            :rules="emailRules"
                            autofocus 
                            required>
                        </v-text-field>
                    </v-flex>
                    <v-flex class="py-2">
                        <v-btn flat small @click="toggleLoginMethod()">
                            Use {{ usingUsername ? 'Email' : 'Username' }}
                        </v-btn>
                    </v-flex>
                </v-layout>
                <!-- Password -->
                <v-text-field 
                    label="password" 
                    v-model="password" 
                    :rules="passwordRules" 
                    required 
                    type="password">
                </v-text-field>
                <!-- Login -->
                <v-btn flat color="success" :disabled="!valid">Login</v-btn>
            </v-form>
        </v-container>
    </v-card>
</template>

<script>
export default {
    data() {
        return {
            usingUsername: true,
            valid: false,
            username: '',
            usernameRules: [
                v => !!v || 'Username is required',
            ],
            email: '',
            emailRules: [
                v => !!v || 'Email is required',
                v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'Invalid Email'
            ],
            password: '',
            passwordRules: [
                v => !!v || 'Password is required',
                v => (v && v.length >= 8) || 'Password is longer than 8 characters'
            ]
        }
    },
    methods: {
        toggleLoginMethod() {
            this.usingUsername = !this.usingUsername;
        }
    }
}
</script>

<style>

</style>
