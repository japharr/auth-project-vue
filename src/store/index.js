import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
import auth from "./modules/auth";
import todo from "./modules/todo";

const store = createStore({
  modules: { auth, todo },
  plugins: [createPersistedState()],
});

export default store;
