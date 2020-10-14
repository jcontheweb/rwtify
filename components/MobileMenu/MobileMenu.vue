<template>
  <div>
    <div @click="expanded = false" v-if="expanded" class="fixed inset-0 z-10"></div>
    <button class="flex" @click="expanded = !expanded">
      <svg
        class="w-6 text-white"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16m-7 6h7"
        />
      </svg>
    </button>

    <transition
      enter-active-class="duration-150 ease-out"
      enter-from-class="scale-95 opacity-0"
      enter-to-class="scale-100 opacity-100"
      leave-active-class="duration-100 ease-in"
      leave-from-class="scale-100 opacity-100"
      leave-to-class="scale-95 opacity-0"
    >
      <div
        v-show="expanded"
        class="absolute inset-x-0 top-0 z-10 p-2 transition origin-top-right transform"
      >
        <div class="overflow-hidden bg-white rounded-lg shadow-md">
          <div class="flex items-center justify-between p-4 border-b border-gray-050">
            <Logo color="dark" />
            <button @click="expanded = false" class="flex text-black">
              <svg
                class="w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div class="px-4 py-6">
            <ul>
              <li class="mb-3" v-if="menu.buy_osrs">
                <nuxt-link class="text-black hover:text-opacity-75" to="/buy-osrs-gold">Buy OSRS Gold</nuxt-link>
              </li>
              <li class="mb-3" v-if="menu.buy_rs3">
                <nuxt-link class="text-black hover:text-opacity-75" to="/buy-rs3-gold">Buy RS3 Gold</nuxt-link>
              </li>
              <li class="mb-3 text-black hover:text-opacity-75" v-if="menu.sell_gold">
                <nuxt-link to="/sell-gold">Sell Gold</nuxt-link>
              </li>
              <li class="mb-3" v-if="menu.swap_gold">
                <nuxt-link class="text-black hover:text-opacity-75" to="/swap-gold">Swap Gold</nuxt-link>
              </li>
              <li v-if="menu.rent_main">
                <nuxt-link class="text-black hover:text-opacity-75" to="/rent-main">Rent Max Main</nuxt-link>
              </li>
            </ul>
          </div>
          <div class="p-4 text-center border-t bg-gray-020 border-gray-040">
              <nuxt-link class="text-black hover:text-opacity-75" to="/">Log in</nuxt-link>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import Logo from "@/components/Logo/Logo";
export default {
  components: {
    Logo
  },
  watch: {
    $route: function(newValue, oldValue) {
      this.expanded = false
    }
  },
  data: () => ({ expanded: false }),
  computed: {
    menu() {
      return this.$store.state.tenant.components.menu;
    }
  }
};
</script>

<style lang="scss">
</style>