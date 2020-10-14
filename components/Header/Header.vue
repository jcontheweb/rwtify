<template>
  <header class="sticky top-0 z-10 py-4 bg-black lg:py-6">
    <div class="container">
      <nav class="flex items-center justify-between">
        <Logo color="light" />
        <ul class="hidden text-sm lg:flex">
          <li class="ml-6 text-white hover:text-opacity-75" v-if="menu.buy_osrs">
            <nuxt-link to="/buy-osrs-gold">Buy OSRS Gold</nuxt-link>
          </li>
          <li class="ml-6 text-white hover:text-opacity-75" v-if="menu.buy_rs3">
            <nuxt-link to="/buy-rs3-gold">Buy RS3 Gold</nuxt-link>
          </li>
          <li class="ml-6 text-white hover:text-opacity-75" v-if="menu.sell_gold">
            <nuxt-link to="/sell-gold">Sell Gold</nuxt-link>
          </li>
          <li class="ml-6 text-white hover:text-opacity-75" v-if="menu.swap_gold">
            <nuxt-link to="/swap-gold">Swap Gold</nuxt-link>
          </li>
          <li class="ml-6 text-white hover:text-opacity-75" v-if="menu.rent_main">
            <nuxt-link to="/rent-main">Rent Max Main</nuxt-link>
          </li>
          <li class="ml-6">
            <CurrencyDropdown class="text-white hover:text-opacity-75" />
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
import CurrencyDropdown from "@/components/CurrencyDropdown/CurrencyDropdown";
export default {
  components: { Logo, MobileMenu, CurrencyDropdown },
  computed: {
    menu() {
      return this.$store.state.tenant.components.menu;
    }
  }
};
</script>

<style lang="scss">
</style>