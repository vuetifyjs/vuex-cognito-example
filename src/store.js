import Vue from 'vue'
import Vuex from 'vuex'
import attachCognitoModule from '@vuetify/vuex-cognito-module'
Vue.use(Vuex)

const set = property => (store, payload) => (store[property] = payload)

const store = new Vuex.Store({
  state: {
    email: '',
    isLoading: false,
    isReady: false,
    password: '',
    snackbar: {},
    user: null
  },
  mutations: {
    setEmail: set('email'),
    setIsReady: set('isReady'),
    setIsLoading: set('isLoading'),
    setPassword: set('password'),
    setUser: set('user'),
    setSnackbar: set('snackbar')
  }
})

attachCognitoModule(store, {
  userPoolId: process.env.VUE_APP_USER_POOL_ID,
  identityPoolId: process.env.VUE_APP_IDENTITY_POOL_ID,
  userPoolWebClientId: process.env.VUE_APP_CLIENT_ID,
  region: process.env.VUE_APP_REGION
}, 'cognito')

store.dispatch('cognito/fetchSession')
  .finally(() => store.commit('setIsReady', true))

export default store
