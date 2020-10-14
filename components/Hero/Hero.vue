<template>
  <div
    class="relative flex flex-col items-center justify-center py-12 bg-center bg-cover lg:py-32 bg-gray-050"
    :style="`background-image:url(${hero.backgroundImage})`"
  >
    <!-- <div class="absolute inset-0 opacity-25" :style="`background: ${hero.backgroundColor}`"></div> -->
    <div class="container relative">
      <div class="max-w-2xl mx-auto text-center border-black lg:bg-white lg:border-4 lg:p-12">
        <h1 class="text-5xl font-semibold tracking-tight uppercase">{{hero.heading}}</h1>
        <p class="mt-4 text-2xl font-medium">{{hero.subheading}}</p>
        <div class="flex justify-center mt-12">
          <nuxt-link
            to="/buy-osrs-gold"
            class="block px-6 py-4 mr-2 font-semibold leading-none text-white bg-black border-2 border-black focus:outline-none hover:opacity-75"
          >Buy OSRS Gold</nuxt-link>
          <nuxt-link
            to="/buy-rs3-gold"
            class="block px-6 py-4 font-semibold leading-none border-2 border-black focus:outline-none hover:opacity-75"
          >Buy RS3 Gold</nuxt-link>
        </div>
        <div class="mt-16">
          <StatisticBar v-if="$store.state.tenant.components.statistics.show" />
        </div>
        <img class="border" src="/Group 1.png" alt="">
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