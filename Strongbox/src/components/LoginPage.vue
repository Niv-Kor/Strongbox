<template>
    <div>
        fdsfsdfsdf
        <v-text-field
            label="Email"
            v-model='email'
            outlined
            clearable
            rounded
            prepend-icon='mdi-account'
            color='#76D161'
        />
        <v-text-field
            label="Password"
            width=100
            :type="showPassword ? 'text' : 'password'"
            :append-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
            v-model='password'
            outlined
            clearable
            rounded
            prepend-icon='mdi-asterisk'
            @click:append='showPassword = !showPassword'
            color='#76D161'
        />
        <v-layout justify-center>
            <v-btn
                class='white--text'
                color='#76D161'
                elevation=2
                :disabled='!valid'
                x-large
                fab
            >
                <v-icon v-if='valid'>mdi-lock-open-variant</v-icon>
                <v-icon v-else>mdi-lock</v-icon>
            </v-btn>
        </v-layout>
    </div>
</template>

<script>
    const EMAIL_REGEX = /^[0-9A-Za-z_-]{1,}@[0-9A-Za-z_-]{1,}\.[0-9A-Za-z.]{1,}$/;
    const PASSWORD_REGEX = /^[0-9A-Za-z]{8,25}$/;

    export default {
        data() {
            return {
                email: '',
                password: '',
                showPassword: false
            }
        },
        computed: {
            valid() {
                return this.isEmailValid() && this.isPasswordValid();
            }
        },
        methods: {
            isEmailValid: function() {
                return EMAIL_REGEX.test(this.email);
            },
            isPasswordValid: function() {
                return PASSWORD_REGEX.test(this.password);
            },
        }
    }
</script>

<style scoped>
.v-text-field {
    width: 50%;
    left: 24%;
}

.v-btn {
    margin-top: 5%;
}
</style>