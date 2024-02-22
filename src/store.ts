import { createStore, Store } from 'vuex';

// Interfejs dla stanu aplikacji
interface RootState {
  loading: boolean;
}

// Tworzenie Vuex Store
const store: Store<RootState> = createStore({
  state: {
    loading: false
  },
  mutations: {
    setLoading(state, status: boolean) {
      state.loading = status;
    }
  },
  actions: {
    startLoading({ commit }) {
      commit('setLoading', true);
    },
    stopLoading({ commit }) {
      commit('setLoading', false);
    }
  }
});

export default store;