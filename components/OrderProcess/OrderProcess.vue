<template>
  <div class="container">
    <div class="max-w-3xl mx-auto flex items-center py-16">
      <div class="w-32 h-32 rounded-full border-2 border-black flex items-center justify-center text-center">{{steps[0].headline}}</div>
      <span class="flex-1 bg-black bg-opacity-25 opacity-50 block h-px mx-8"></span>
      <div class="w-32 h-32 rounded-full border-2 border-black flex items-center justify-center text-center">{{steps[1].headline}}</div>
      <span class="flex-1 bg-black bg-opacity-25 opacity-50 block h-px mx-8"></span>
      <div class="w-32 h-32 rounded-full border-2 border-black flex items-center justify-center text-center">{{steps[2].headline}}</div>
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