import Vue from 'vue';
import Vuex from 'vuex';
import { loginUser } from '@/api/auth';
import {
  getAuthFromCookie,
  getUserFromCookie,
  saveAuthToCookie,
  saveUserToCookie,
} from '@/utils/cookies';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    username: getUserFromCookie() || '',
    token: getAuthFromCookie() || '',
  },
  getters: {
    isLogin(state) {
      return state.username !== '';
    },
    getUsername(state) {
      return state.username;
    },
  },
  mutations: {
    setUsername(state, username) {
      state.username = username;
    },
    clearUsername(state) {
      state.username = '';
    },
    setToken(state, token) {
      state.token = token;
    },
    clearToken(state) {
      state.token = '';
    },
  },
  actions: {
    async LOGIN({ commit }, userData) {
      const { data } = await loginUser(userData);
      // vuex state 저장
      commit('setToken', data.token);
      commit('setUsername', data.user.username);
      // cookie에 저장하기
      saveAuthToCookie(data.token);
      saveUserToCookie(data.user.username);

      return data;
    },
  },
});
