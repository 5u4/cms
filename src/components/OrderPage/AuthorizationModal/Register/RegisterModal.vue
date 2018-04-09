<template>
    <v-card flat>
        <v-container>
            <v-alert type="error" dismissible v-model="showMessage">
                {{responseText}}
            </v-alert>
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
                <v-btn flat block color="success" :disabled="!valid" @click="register()">Register</v-btn>
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
            ],
            resource: {},
            responseText: '',
            showMessage: false
        }
    },
    created() {
        const customActions = {
            createUser: {method: 'POST'}
        };
        this.resource = this.$resource('api/v1/users/register', {}, customActions);
    },
    methods: {
        register() {
            this.resource.createUser({
                username: this.username,
                email: this.email,
                password: this.password,
                password_confirmation: this.passwordConfirmation
            }).then(response => { /* Created */
                /* Login */
            }, error => { /* Having Errors */
                const errors = error.body.error.message;
                this.responseText = '';

                if (errors.username) {
                    this.responseText += errors.username + " ";
                }

                if (errors.email) {
                    this.responseText += errors.email + " ";
                }

                if (errors.password) {
                    this.responseText += errors.password + " ";
                }

                if (errors.password_confirmation) {
                    this.responseText += errors.password_confirmation + " ";
                }

                this.showMessage = true;
            });
        }
    }
}
</script>

<style>

</style>
