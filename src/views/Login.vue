<template>
  <div class="w-full">
    <div class="z-30 m-auto bg-white p-2 rounded shadow w-1/3">
      <div class="p-2 border">
        <h1 class="text-2xl text-center">Login</h1>
        <form class="p-2" @submit.prevent="submit()">
          <div class="my-4">
            <label for="">Email or Username</label>
            <input
              class="rounded shadow p-2 w-full"
              type="text"
              ref="emailRef"
              v-model="state.form.username"
              placeholder="Enter your email or username"
            />
          </div>
          <div class="my-4">
            <label for="">Password</label>
            <input
              class="rounded shadow p-2 w-full"
              type="password"
              v-model="state.form.password"
              placeholder="Enter your password"
            />
          </div>
          <div>
            <button
              type="submit"
              :disabled="isLoading"
              :class="isLoading ? 'opacity-50' : ''"
              class="w-full rounded shadow-md bg-gradient-to-r from-red-800 to-pink-600 text-white p-2"
            >
              <span v-if="!isLoading">Login</span>
              <span v-else>Loading...</span>
            </button>
          </div>
        </form>
        <p v-if="showError" id="error">Username or Password is incorrect</p>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default {
  setup() {
    const showError = ref(false);
    const isLoading = ref(false);
    const state = reactive({
      form: {
        username: "",
        password: "",
      },
    });

    const store = useStore();
    const router = useRouter();

    const submit = async () => {
      isLoading.value = true;
      const user = new FormData();
      user.append("username", state.form.username);
      user.append("password", state.form.password);

      try {
        await store.dispatch("login", user);
        router.push("/posts");
        showError.value = false;
        isLoading.value = false;
      } catch (error) {
        showError.value = true;
        isLoading.value = false;
      }
    };

    return { state, submit, showError, isLoading };
  },
};
</script>
