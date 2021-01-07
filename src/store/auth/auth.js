import { Auth } from 'aws-amplify';

export const auth = {
    namespaced: true,
    state: {
        user: null
    },
    mutations: {
        setUser(state, payload) {
            state.user = payload;
        }
    },
    actions: {
        async logout({commit}) {
            commit('setUser', null);
            return await Auth.signOut();
        },
        async login({ commit }, { email, password }) {
            try {
                await Auth.signIn({email, password});
                const userInfo = await Auth.currentUserInfo();
                commit('setUser', userInfo);
                return Promise.resolve('Success');
            } catch (error) {
                console.log(error);
                return Promise.reject(error);
            }
        },
        async confirmSignup(_, { email, code }) {
            try {
                await Auth.confirmSignUp(email, code);
                return Promise.resolve();
            } catch (error) {
                console.log(error);
                return Promise.reject(error);
                
            }
        },
        async signup(_, {email, password}) {
            try {
                await Auth.signUp({email, password});
                return Promise.resolve();
            } catch (error) {
                console.log('error signing up:', error);
                return Promise.reject();
            }
        },
        async authAction({ commit }) {
            const userInfo = await Auth.currentUserInfo();
            commit('setUser', userInfo);
        }
    },
    getters: {
        user: (state) => state.user
    }
}; 