<template>
    <div>
        <v-flex align-center>
            <v-img
                class='logo'
                contain
                src="../../assets/logo.png"
                width=400
                aspect-ratio="1.5"
            ></v-img>
        </v-flex>
        <router-view class='router-view'></router-view>
        <v-layout justify-center>
            <v-btn
                class='unlock-btn white--text'
                :color='colors.primary'
                elevation=2
                :disabled='!enableButton'
                x-large
                fab
            >
                <v-icon v-if='enableButton'>mdi-lock-open-variant</v-icon>
                <v-icon v-else>mdi-lock</v-icon>
            </v-btn>
        </v-layout>
        <div class='buttons-layout'>
            <v-layout justify-center>
                <div>
                    <v-btn
                        class='signup-btn'
                        rounded
                        color='white'
                        width=150
                        @click="goto('/signup')"
                    >
                        Sign Up
                    </v-btn>
                </div>
            </v-layout>
            <v-layout justify-center>
                <div>
                    <v-btn
                        text
                        @click="goto('/login')"
                    >
                        Log In
                    </v-btn>
                </div>
            </v-layout>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        created() {
            // let niv = new UserProfile('Niv');
            // let mor = new UserProfile('Mor');
            // niv.door.setCryptoKey(mor.door.getPublicKey());
            // let message = 'Hello World!';
            // console.log(message);
            // let encrypted = Composer.compose(message, niv);
            // console.log(encrypted);
            // let decrypted = Composer.decompose(encrypted, mor);
            // console.log(decrypted);
        },
        computed: {
            ...mapGetters({
                colors: 'getColors',
                enableButton: 'getInputValidation'
            })
        },
        methods: {
            goto: function(path) {
                this.$router.push({ path: path });
            },
            setValidation: function(flag) {
                console.log('got here');
                this.inputValid = flag;
            }
        }
    }
</script>

<style scoped>
    .logo {
        flex: 1 1 100%;
        margin: auto;
        padding: 24px;
        width: 100%;
    }

    .buttons-layout {
        position: absolute;
        bottom: 2%;
        margin-left: auto;
        margin-right: auto;
        left: 0;
        right: 0;
    }

    .signup-btn {
        bottom: 10px;
    }

    .router-view {
        margin-top: 7%;
    }

    .unlock-btn {
        position: absolute;
        bottom: 130px;
    }
</style>