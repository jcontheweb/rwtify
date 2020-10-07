<template>
  <div class="max-w-lg grid grid-cols-4 mx-auto gap-8">
    <div class="text-center">
      <p class="leading-none text-2xl font-bold flex justify-center items-baseline">
        {{statistics.clients.toLocaleString()}}
        <span class="text-base">+</span>
      </p>
      <p class="leading-none uppercase text-sm text-opacity-75 font-medium mt-px text-black">Clients</p>
    </div>
    <div class="text-center">
      <p class="leading-none text-2xl font-bold flex justify-center items-baseline">
        {{statistics.total_sales.gold.toLocaleString()}}
        <span class="text-base">M+</span>
      </p>
      <p class="leading-none uppercase text-sm text-opacity-75 font-medium mt-px text-black">Gold Sold</p>
    </div>
    <div class="text-center">
      <p class="leading-none text-2xl font-bold flex justify-center items-baseline">
        {{statistics.orders.toLocaleString()}}
        <span class="text-base">+</span>
      </p>
      <p class="leading-none uppercase text-sm text-opacity-75 font-medium mt-px text-black">Orders</p>
    </div>
    <div class="text-center">
      <p class="leading-none text-2xl font-bold flex justify-center items-baseline">
        {{statistics.in_business.toLocaleString()}}
        <span class="text-base">+</span>
      </p>
      <p class="leading-none uppercase text-sm text-opacity-75 font-medium mt-px text-black">Active years</p>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    statistics() {
      return this.$store.state.tenant.components.statistics;
    }
  }
};
</script>

<style lang="scss">
</style>