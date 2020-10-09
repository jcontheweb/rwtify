<template>
  <header class="py-4 lg:py-6 bg-black sticky top-0 z-10">
    <div class="container">
      <nav class="flex justify-between items-center">
        <Logo color="light" />
        <ul class="hidden lg:flex text-sm">
          <li class="text-white hover:text-opacity-75 ml-6" v-if="menu.buy_osrs">
            <nuxt-link to="/">Buy OSRS Gold</nuxt-link>
          </li>
          <li class="text-white hover:text-opacity-75 ml-6" v-if="menu.buy_rs3">
            <nuxt-link to="/">Buy RS3 Gold</nuxt-link>
          </li>
          <li class="text-white hover:text-opacity-75 ml-6" v-if="menu.sell_gold">
            <nuxt-link to="/">Sell Gold</nuxt-link>
          </li>
          <li class="text-white hover:text-opacity-75 ml-6" v-if="menu.swap_gold">
            <nuxt-link to="/">Swap Gold</nuxt-link>
          </li>
          <li class="text-white hover:text-opacity-75 ml-6" v-if="menu.rent_main">
            <nuxt-link to="/">Rent Max Main</nuxt-link>
          </li>
        </ul>
        <MobileMenu class="lg:hidden" />
      </nav>
    </div>
  </header>
</template>

<script>
import Logo from "@/components/Logo/Logo";
import MobileMenu from "@/components/MobileMenu/MobileMenu";
export default {
  components: { Logo, MobileMenu },
  computed: {
    menu() {
      return this.$store.state.tenant.components.menu;
    }
  }
};
</script>

<style lang="scss">
</style>