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
    },
    getTopHistory(state) {
      return state.shopHistory.slice(0, 3);
    },
    getHistory(state) {
      return state.shopHistory;
    },
    getFavorite(state) {
      return state.shopFavorite;
    },
    getFavoriteMetadata(state) {
      return state.shopFavorite.map(
        ({ shopId, appId }) => `${appId}.${shopId}`
      );
    }
  },
  mutations: {
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
    },
    setShopDetail(state, value) {
      state.shopDetail = value;
    },
    addHistory(state, value) {
      if (!state.shopHistory.length) state.shopHistory.unshift(value);
      else if (
        `${state.shopHistory[0].appId}.${state.shopHistory[0].shopId}` !==
        `${value.appId}.${value.shopId}`
      )
        state.shopHistory.unshift(value);
    },
    addFavorite(state, value) {
      state.shopFavorite.unshift(value);
    },
    removeFavorite(state, value) {
      state.shopFavorite = state.shopFavorite.filter(
        shop =>
          `${shop.appId}.${shop.shopId}` !== `${value.appId}.${value.shopId}`
      );
    }
  },
  actions: {
    setDetail(context, value) {
      context.commit("setShopDetail", value);
      context.commit("addHistory", value);
    },
    saveFavorite(context, value) {
      context.commit("addFavorite", value);
    },
    deleteFavorite(context, value) {
      context.commit("removeFavorite", value);
    }
  },
  modules: {}
});

store.subscribe((mutation, state) => {
  // Store the state object as a JSON string
  localStorage.setItem(KRAICHANA_STORAGE_NAME, JSON.stringify(state));
});

export default store;
