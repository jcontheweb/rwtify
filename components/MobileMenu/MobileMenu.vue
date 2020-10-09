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
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="duration-100 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <div
        v-show="expanded"
        class="absolute transform transition origin-top-right inset-x-0 top-0 p-2 z-10"
      >
        <div class="bg-white shadow-md rounded-lg overflow-hidden">
          <div class="flex items-center justify-between p-4 border-b border-gray-050">
            <Logo color="dark" />
            <button @click="expanded = false" class="text-black flex">
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
                <nuxt-link class="text-black hover:text-opacity-75" to="/">Buy OSRS Gold</nuxt-link>
              </li>
              <li class="mb-3" v-if="menu.buy_rs3">
                <nuxt-link class="text-black hover:text-opacity-75" to="/">Buy RS3 Gold</nuxt-link>
              </li>
              <li class="text-black hover:text-opacity-75 mb-3" v-if="menu.sell_gold">
                <nuxt-link to="/">Sell Gold</nuxt-link>
              </li>
              <li class="mb-3" v-if="menu.swap_gold">
                <nuxt-link class="text-black hover:text-opacity-75" to="/">Swap Gold</nuxt-link>
              </li>
              <li v-if="menu.rent_main">
                <nuxt-link class="text-black hover:text-opacity-75" to="/">Rent Max Main</nuxt-link>
              </li>
            </ul>
          </div>
          <div class="p-4 bg-gray-020 border-t text-center border-gray-040">
              <nuxt-link class="hover:text-opacity-75 text-black" to="/">Log in</nuxt-link>
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