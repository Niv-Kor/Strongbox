import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const STORE = new Vuex.Store({
    state: {
        colors: {
            primary: '#76D161',
            secondary: '#666666'
        },
        regex: {
            email: /^[0-9A-Za-z_-]{1,}@[0-9A-Za-z_-]{1,}\.[0-9A-Za-z.]{1,}$/,
            password: /^[0-9A-Za-z]{8,25}$/
        }
    },
    getters: {
        getColors: state => {
            return state.colors;
        },
        getRegex: state => {
            return state.regex;
        }
    }
});