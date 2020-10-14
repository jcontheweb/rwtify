<template>
  <div class="w-full max-w-lg">
    <h1 class="text-3xl font-medium">Confirm your transaction</h1>
    <section class="p-6 bg-gray-030">
      <p class="text-lg">Delivery</p>
      <input
        placeholder="In-game name"
        type="text"
        class="block w-full p-4 mt-1 transition duration-300 border focus:outline-none focus:border-black border-gray-050 bg-gray-010 focus:bg-white"
      />
    </section>
    <div class="flex flex-col items-center mt-6">
      <button
        :disabled="!selected || !quantity"
        :class="!selected || !quantity ? 'cursor-not-allowed opacity-75' : 'hover:shadow-lg focus:shadow-none'"
        class="w-full py-4 text-2xl text-white bg-black rounded focus:outline-none"
      >Buy Gold</button>
      <button @click="$emit('updateStep', 1)" class="mt-2 text-sm focus:outline-none">Cancel transaction</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["selected", "quantity"]
};
</script>

<style lang="scss">
</style>