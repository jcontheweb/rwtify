<template>
  <div class="fixed inset-0 bg-gray-030 flex items-center justify-center">
    <div
      class="max-w-md border-4 border-black px-8 py-12 bg-white flex flex-col items-center text-center"
    >
      <svg
        class="text-black w-24 mx-auto"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1"
          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
        />
      </svg>
      <h1 class="text-4xl font-semibold leading-none mt-2">Password Protected</h1>
      <p class="text-sm mt-1 leading-none">This page has been password protected by the owner.</p>
      <form @submit.prevent="submit" class="flex mt-8">
        <input
          v-model="password"
          type="password"
          class="focus:outline-none py-1 px-2 border-2 border-black"
        />

        <div class="ml-2 flex">
          <button
            type="submit"
            :class="{'spinner': loading}"
            class="px-4 bg-black text-white hover:bg-opacity-75 leading-none font-medium"
          >Submit</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    password: "",
    loading: false
  }),
  methods: {
    async submit() {
      try {
        await this.$axios.post("justin/page_authorization", { password: this.password });
        this.$toast.success("Successfully authenticated");
        this.$store.commit('SET_AUTHORIZED', true)
      } catch (error) {
        this.$toast.error("Error while authenticating");
        this.password = ''
      }
    }
  }
};
</script>

<style lang="scss">
</style>