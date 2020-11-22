<template>
  <div class="w-full">
    <div class="z-30 m-auto bg-white p-2 rounded shadow w-1/3">
      <div class="p-2 border">
        <h1 class="text-2xl text-center">Posts</h1>
        <div v-if="user">
          <p>Hi {{ User }}</p>
        </div>
        <div>
          <form @submit.prevent="submit()">
            <div>
              <label for="title">Title:</label>
              <input type="text" name="title" v-model="state.form.title" />
            </div>
            <div>
              <textarea
                name="write_up"
                v-model="state.form.writeUp"
                placeholder="Write up..."
              ></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>

        <div class="posts" v-if="posts">
          <ul>
            <li v-for="post in Posts" :key="post.id">
              <div id="post-div">
                <p>{{ post.title }}</p>
                <p>{{ post.write_up }}</p>
                <p>Written By: {{ post.author.username }}</p>
              </div>
            </li>
          </ul>
        </div>
        <div v-else>
          Oh no!!! We have no posts
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, reactive } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const state = reactive({
      form: {
        title: "",
        write_up: "",
      },
    });

    const store = useStore();

    //store.dispatch("getPosts");

    const user = computed(() => store.getters.user);
    const posts = computed(() => store.getters.posts);

    const submit = async () => {
      try {
        await store.dispatch("createPost", state.form);
      } catch (error) {
        throw "Sorry you can't make a post now!";
      }
    };

    return { state, user, posts, submit };
  },
};
</script>

<style></style>
