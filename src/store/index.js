import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
const KRAICHANA_STORAGE_NAME = "kraichana-store";

const store = new Vuex.Store({
  state: {
    shopDetail: null,
    shopHistory: [],
    shopFavorite: []
  },
  getters: {
    getDetail(state) {
      return state.shopDetail;
    }
  },
  mutations: {
    setShopDetail(state, value) {
      state.shopDetail = value;
    },
    addHistory(state, value) {
      state.shopHistory.unshift(value);
    },
    initialiseStore(state) {
      // Check if the ID exists
      if (localStorage.getItem(KRAICHANA_STORAGE_NAME)) {
        // Replace the state object with the stored item
        this.replaceState(
          Object.assign(
            state,
            JSON.parse(localStorage.getItem(KRAICHANA_STORAGE_NAME))
          )
        );
      }
    }
  },
  actions: {
    setDetail(context, value) {
      context.commit("setShopDetail", value);
      context.commit("addHistory", value);
    }
  },
  modules: {}
});

store.subscribe((mutation, state) => {
  // Store the state object as a JSON string
  localStorage.setItem(KRAICHANA_STORAGE_NAME, JSON.stringify(state));
});

export default store;
