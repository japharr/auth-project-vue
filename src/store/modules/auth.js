import axios from "../../plugins/axios";

const auth = {
  state: () => ({
    user: null,
    posts: null,
  }),
  mutations: {
    setUser(state, username) {
      state.user = username;
    },
    setPost(state, posts) {
      state.posts = posts;
    },
    logout(state, user) {
      state.user = user;
    },
  },
  actions: {
    async register({ dispatch }, form) {
      console.log("register action");
      console.log(form);
      const data = await axios
        .post("register", form)
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
      console.log(data);
      let userForm = new FormData();
      userForm.append("username", form.username);
      userForm.append("password", form.password);
      await dispatch("login", userForm);
    },
    async login({ commit }, user) {
      console.log("login action...");
      await axios
        .post("login", user, {
          withCredentials: false,
        })
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
      await commit("setUser", user.get("username"));
    },
    async createPost({ dispatch }, post) {
      await axios.post("post", post);
      return await dispatch("getPosts");
    },
    async getPosts({ commit }) {
      let response = await axios
        .get("posts")
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
      commit("setPosts", response.data);
    },
    async logout({ commit }) {
      let user = null;
      commit("logout", user);
    },
  },
  getters: {
    isAuthenticated: (state) => !!state.user,
    statePosts: (state) => state.posts,
    stateUsers: (state) => state.user,
  },
};

export default auth;
