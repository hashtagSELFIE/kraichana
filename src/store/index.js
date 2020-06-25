import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    shopDetail: null,
  },
  getters: {
    getDetail(state) {
      return state.shopDetail;
    },
  },
  mutations: {
    setShopDetail(state, value) {
      state.shopDetail = value;
    },
  },
  actions: {
    setDetail(context, value) {
      context.commit("setShopDetail", value);
    },
  },
  modules: {},
});
