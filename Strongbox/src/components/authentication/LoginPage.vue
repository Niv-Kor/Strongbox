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
        watch: {
            valid: function(value) {
                this.$store.dispatch('setValidation', value);
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
    width: 60%;
    left: 19%;
}

.v-btn {
    margin-top: 5%;
}
</style>