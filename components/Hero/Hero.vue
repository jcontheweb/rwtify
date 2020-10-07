<template>
  <div
    class="relative py-32 bg-gray-050 flex flex-col items-center justify-center bg-cover bg-center"
    :style="`background-image:url(${hero.backgroundImage})`"
  >
    <!-- <div class="absolute inset-0 opacity-25" :style="`background: ${hero.backgroundColor}`"></div> -->
    <div class="container relative">
      <div class="max-w-2xl mx-auto bg-white text-center border-4 border-black p-12">
        <h1 class="font-semibold uppercase tracking-tight text-5xl">{{hero.heading}}</h1>
        <p class="text-2xl font-medium mt-4">{{hero.subheading}}</p>
        <div class="mt-12">
          <button
            class="mr-4 focus:outline-none border-2 hover:opacity-75 border-black bg-black text-white px-6 py-4 leading-none font-semibold"
          >Buy OSRS Gold</button>
          <button
            class="focus:outline-none border-2 border-black px-6 py-4 leading-none font-semibold hover:opacity-75"
          >Buy RS3 Gold</button>
        </div>
        <div class="mt-16">
          <StatisticBar v-if="$store.state.tenant.components.statistics.show" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    StatisticBar: () => import("@/components/StatisticBar/StatisticBar")
  },
  computed: {
    hero() {
      return this.$store.state.tenant.components.hero;
    }
  }
};
</script>

<style lang="scss">
</style>