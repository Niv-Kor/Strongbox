<template>
    <div>
        <v-text-field
            label="Email Address"
            v-model='email'
            outlined
            clearable
            rounded
            prepend-icon='mdi-account'
            :color='colors.primary'
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
            :color='colors.primary'
            prepend-icon='mdi-asterisk'
            @click:append='showPassword = !showPassword'
        />
        <v-layout justify-center>
            <v-btn
                class='white--text'
                :color='colors.primary'
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
    import { mapGetters } from 'vuex';

    export default {
        data() {
            return {
                email: '',
                password: '',
                showPassword: false
            }
        },
        computed: {
            ...mapGetters({
                colors: 'colors',
                regex: 'regex'
            }),
            valid() {
                return this.isEmailValid() && this.isPasswordValid();
            }
        },
        methods: {
            isEmailValid: function() {
                return this.regex.email.test(this.email);
            },
            isPasswordValid: function() {
                return this.regex.password.test(this.password);
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