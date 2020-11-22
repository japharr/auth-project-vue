const todo = {
  state: () => ({
    username: "japharr@gmail.com",
    todos: [
      { id: 1, text: "...", done: true },
      { id: 2, text: "...", done: true },
      { id: 3, text: "...", done: false },
    ],
  }),
  mutations: {
    deleteTodo(state, id) {
      const todos = state.todos;

      const index = todos.indexOf(todos.filter((t) => t.id === id)[0]);
      if (index !== -1) {
        todos.splice(index, 1);
      }
    },
  },
  actions: {
    deleteTodo({ commit }, id) {
      console.log("deleteTodo action: " + id);
      commit("deleteTodo", id);
    },
    hello() {
      console.log("Hello world");
    },
  },
  getters: {
    doneTodos(state) {
      return state.todos.filter((todo) => todo.done);
    },
    getTodoById: (state) => (id) => {
      return state.todos.filter((todo) => todo.id === id);
    },
    doneTodosCount(state, getters) {
      return getters.doneTodos.length;
    },
  },
};

export default todo;
