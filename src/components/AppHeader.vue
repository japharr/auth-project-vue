<template>
  <nav class="bg-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <img
              class="h-8 w-8"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
              alt="Workflow"
            />
          </div>
          <div class="hidden md:block">
            <div class="ml-10 flex items-baseline space-x-4">
              <router-link
                to="/"
                active-class="bg-gray-900 text-white"
                class="px-3 py-2 rounded-md text-sm font-medium text-white"
                >Dashboard</router-link
              >

              <router-link
                to="/posts"
                class="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700"
                >Posts</router-link
              >

              <span v-if="isLoggedIn">
                <a
                  @click="logout()"
                  class="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700"
                  >Logout</a
                >
              </span>
              <span v-else>
                <router-link
                  class="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700"
                  to="/register"
                  >Register</router-link
                >
                <router-link
                  class="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700"
                  to="/login"
                  >Login</router-link
                >
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default {
  setup() {
    const showProfileMenu = ref(false);

    const store = useStore();
    const router = useRouter();

    const isLoggedIn = computed(() => store.getters.isAuthenticated);

    const logout = () => {
      store.dispatch("logout");
      router.push("/login");
    };

    return { showProfileMenu, isLoggedIn, logout };
  },
};
</script>

<style></style>
