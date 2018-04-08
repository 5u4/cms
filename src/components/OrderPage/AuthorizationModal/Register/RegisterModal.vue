<template>
    <v-card flat>
        <v-container>
            <v-form lazy-validation v-model="valid" ref="form">
                <!-- Username -->
                <v-text-field 
                    label="username"
                    v-model="username"
                    :rules="usernameRules"
                    required>
                </v-text-field>
                <!-- Email -->
                <v-text-field 
                    label="email"
                    v-model="email"
                    :rules="emailRules"
                    required>
                </v-text-field>
                <!-- Password -->
                <v-text-field 
                    label="password"
                    v-model="password"
                    :rules="passwordRules"
                    type="password"
                    required>
                </v-text-field>
                <!-- Password Confirmation -->
                <v-text-field 
                    label="password confirmation"
                    v-model="passwordConfirmation"
                    :rules="passwordRules"
                    type="password"
                    required>
                </v-text-field>
                <!-- Register -->
                <v-btn flat color="success" :disabled="!valid">Register</v-btn>
            </v-form>
        </v-container>
    </v-card>
</template>

<script>
export default {
    data() {
        return {
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
            passwordConfirmation: '',
            passwordRules: [
                v => !!v || 'Password is required',
                v => (v && v.length >= 8) || 'Password is longer than 8 characters'
            ]
        }
    }
}
</script>

<style>

</style>
