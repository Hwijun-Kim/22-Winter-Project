import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const storage = {};

export const store = new Vuex.Store({
  state: {
    headerText: "UXM Music",
    isLoading: false,
    userID: ""
  },
  getters: {
    headerText(state) {
      return state.headerText;
    },
    userID(state) {
      return state.UserID;
    }
  },
  mutations: {
    CAHNGE_LOAD_STATUS(state, status = true) {
      state.isLoading = status;
    }
  },
  actions: {
    async getUserPostData({ commit }) {
      try {
        commit("CHANGE_LOAD_STATUS");
      }
    }
  }
});
