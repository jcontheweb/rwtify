<template>
  <div class="py-16 lg:py-24">
    <div class="container">
      <div class="max-w-3xl mx-auto">
        <div class="md:flex items-center">
          <div class="flex flex-col items-center">
            <p class="uppercase font-medium mb-1 text-black text-opacity-75">{{steps[0].headline}}</p>
            <div
              class="w-24 h-24 p-2 bg-gray-020 mx-auto rounded-full flex items-center justify-center text-center"
            >
              <img :src="steps[0].icon" alt />
            </div>
          </div>
          <span class="flex-1 bg-black bg-opacity-25 opacity-75 hidden md:block h-px mx-6"></span>
          <div class="md:hidden mx-auto w-px h-16 bg-black bg-opacity-25 my-4"></div>
          <div class="flex flex-col items-center">
            <p class="uppercase font-medium mb-1 text-black text-opacity-75">{{steps[1].headline}}</p>
            <div
              class="w-24 h-24 p-2 bg-gray-020 mx-auto rounded-full flex items-center justify-center text-center"
            >
              <img :src="steps[1].icon" alt />
            </div>
          </div>
          <span class="flex-1 bg-black bg-opacity-25 opacity-75 hidden md:block h-px mx-6"></span>
          <div class="md:hidden mx-auto w-px h-16 bg-black bg-opacity-25 my-4"></div>
          <div class="flex flex-col items-center">
            <p class="uppercase font-medium mb-1 text-black text-opacity-75">{{steps[2].headline}}</p>
            <div
              class="w-24 h-24 p-2 bg-gray-020 mx-auto rounded-full flex items-center justify-center text-center"
            >
              <img :src="steps[2].icon" alt />
            </div>
          </div>
        </div>
        <div class="mt-16 md:mt-24 flex justify-center">
          <nuxt-link
            to="/"
            class="focus:outline-none border-2 hover:opacity-75 border-black bg-black text-white px-6 py-4 leading-none font-semibold"
          >Buy OSRS Gold</nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    steps() {
      return this.$store.state.tenant.components.order_process.steps;
    }
  }
};
</script>

<style lang="scss">
</style>