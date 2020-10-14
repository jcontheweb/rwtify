<template>
  <div class="relative">
    <div v-if="expanded" @click="expanded = false" class="fixed inset-0"></div>
    <button @click="expanded = !expanded" class="flex items-center focus:outline-none">
      {{ selected_currency.name }}
      <svg
        :class="{ 'rotate-180': expanded }"
        class="w-4 ml-px transform"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          clip-rule="evenodd"
        />
      </svg>
    </button>
    <div v-if="expanded" class="absolute right-0 z-10 w-20 mt-2 text-black bg-white border border-black top-100">
      <button
        @click="setCurrency(currency)"
        v-for="currency in currencies"
        :key="currency.name"
        class="block w-full py-2 focus:outline-none hover:bg-gray-030"
      >{{ currency.name }}</button>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    expanded: false
  }),
  methods: {
    setCurrency(currency) {
      this.$store.dispatch("updateCurrency", currency);
      this.expanded = false;
    }
  },
  computed: {
    currencies() {
      return this.$store.state.tenant.currencies;
    },
    selected_currency() {
      return this.$store.state.currency;
    }
  }
};
</script>

<style lang="scss">
</style>