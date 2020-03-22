const state = {
    inputValid: false,
    inputAuthenticated: false
};

const getters = {
    getInputValidation: state => {
        return state.inputValid;
    },
    getInputAuthentication: () => {
        //reach out to server and check authentication
    }
};

const mutations = {
    setValidation: (state, flag) => {
        state.inputValid = flag;
    }
};

const actions = {
    setValidation: ({ commit }, flag) => {
        commit('setValidation', flag);
    }
};

export default {
    state: state,
    getters: getters,
    mutations: mutations,
    actions: actions
}