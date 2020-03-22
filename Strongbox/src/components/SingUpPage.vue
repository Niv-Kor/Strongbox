<template>
    <div>
        <v-text-field
            label="Email"
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
            prepend-icon='mdi-asterisk'
            :color='colors.primary'
            @click:append='showPassword = !showPassword'
        />
          <v-text-field
            label="PasswordAuthentication"
            width=100
            :type="showPassword ? 'text' : 'password'"
            :append-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
            v-model='passwordAuthentication'
            outlined
            clearable
            rounded
            prepend-icon='mdi-asterisk'
            :color='colors.primary'
            @click:append='showPassword = !showPassword'
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
                colors: 'getColors',
                regex: 'getRegex'
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