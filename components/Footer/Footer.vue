<template>
  <footer class="bg-black text-white">
    <!-- <div class="py-8">
      <div class="container">
        <div class="flex">
          <div class="flex-1">
            <h4 class="font-medium uppercase text-white">acme</h4>
            <div class="mt-4">
              <a class="block mt-1 text-white text-opacity-75 hover:text-opacity-100" href="">About us</a>
              <a class="block mt-1 text-white text-opacity-75 hover:text-opacity-100" href="">Blog</a>
              <a class="block mt-1 text-white text-opacity-75 hover:text-opacity-100" href="">FAQ</a>
            </div>
          </div>
          <div class="flex-1">
            <h4 class="font-medium uppercase text-white">acme</h4>
            <div class="mt-4">
              <a class="block mt-1 text-white text-opacity-75 hover:text-opacity-100" href="">About us</a>
              <a class="block mt-1 text-white text-opacity-75 hover:text-opacity-100" href="">Blog</a>
              <a class="block mt-1 text-white text-opacity-75 hover:text-opacity-100" href="">FAQ</a>
            </div>
          </div>
          <div class="flex-1">
            <h4 class="font-medium uppercase text-white">acme</h4>
            <div class="mt-4">
              <a class="block mt-1 text-white text-opacity-75 hover:text-opacity-100" href="">About us</a>
              <a class="block mt-1 text-white text-opacity-75 hover:text-opacity-100" href="">Blog</a>
              <a class="block mt-1 text-white text-opacity-75 hover:text-opacity-100" href="">FAQ</a>
            </div>
          </div>
          <div class="flex-1">
            <h4 class="font-medium uppercase text-white">acme</h4>
            <div class="mt-4">
              <a class="block mt-1 text-white text-opacity-75 hover:text-opacity-100" href="">About us</a>
              <a class="block mt-1 text-white text-opacity-75 hover:text-opacity-100" href="">Blog</a>
              <a class="block mt-1 text-white text-opacity-75 hover:text-opacity-100" href="">FAQ</a>
            </div>
          </div>
          <div class="w-32"></div>
        </div>
      </div>
    </div> -->
    <div class="border-t border-black border-opacity-25 py-6">
      <div class="container">
        <p class="text-sm" v-html="footer.statement"></p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  computed: {
    footer() {
      return this.$store.state.tenant.components.footer;
    }
  }
};
</script>

<style lang="scss">
</style>