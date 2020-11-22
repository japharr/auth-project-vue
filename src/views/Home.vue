<template>
  <div class="m-auto">
    <h1 class="text-center">This is home view</h1>
    <p>Heyyyyyy welcome to our blog, check out our posts</p>

    <ul>
      <li v-for="t in doneTodos" :key="t.id">
        {{ t }}
        <button @click="deleteTodo(t.id)">Delete Todos</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();

    const username = computed(() => {
      return store.state.username;
    });

    const doneTodos = computed(() => {
      return store.getters.doneTodos;
    });

    const todo1 = computed(() => {
      return store.getters.getTodoById(1);
    });

    const deleteTodo = (id) => {
      console.log("Home... id: " + id);
      store.dispatch("deleteTodo", id);
    };

    return { username, doneTodos, todo1, deleteTodo };
  },
};
</script>

<style></style>
