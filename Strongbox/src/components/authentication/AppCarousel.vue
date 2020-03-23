<template>
    <div>
        <v-layout justify-center>
            <div class='ico'>
                <v-icon
                    x-large
                    :color='colors.primary'
                >{{ info[periodPtr].icon }}</v-icon>
            </div>
        </v-layout>
        <div
            class='info-p'
            v-html='info[periodPtr].text'
        >{{ info[periodPtr].text }}
        </div>
        <hr class='hr' width=0%>
        <v-layout justify-center>
            <div
                v-for='period in 3'
                :class='getPeriodClass(period)'
                :key="period"
                @click='periodPtr = period - 1'
            >.</div>
        </v-layout>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        data() {
            return {
                periodPtr: 0,
                info: [
                    { text: 'Some information about<br>Strongbox', icon: 'mdi-chat-processing'},
                    { text: 'Something inspiring<br>about Strongbox', icon: 'mdi-lock-alert'},
                    { text: 'An ability only<br>Strongbox has', icon: 'mdi-account-group'}
                ]
            }
        },
        computed: {
            ...mapGetters({
                colors: 'getColors'
            })
        },
        methods: {
            getPeriodClass: function(period) {
                let defClass = 'periods';
                let focusClass = (this.periodPtr === period - 1) ? 'focus' : 'blur';
                return defClass + ' ' + focusClass;
            }
        }
    }
</script>

<style scoped>
    .ico {
        margin-top: 2%;
        margin-bottom: -5%;
    }

    .info-p {
        display: block;
        text-align: center;
        margin-top: 8%;
        font-size: 30px;
        font-family: 'Comfortaa';

    }

    .periods {
        display: inline;
        font-size: 60px;
    }

    .focus {
        color: black;
    }

    .blur {
        color: #c9c9c9;
    }
</style>