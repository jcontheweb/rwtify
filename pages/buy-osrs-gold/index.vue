<template>
  <div class="flex items-center flex-1 py-8 lg:py-24">
    <BuyGoldTemplate title="Buy OSRS Gold" :rate="rate" />
  </div>
</template>

<script>
import BuyGoldTemplate from "@/components/BuyGoldTemplate/BuyGoldTemplate";
export default {
  middleware({ store, redirect }) {
    if (!store.state.tenant.components.menu.buy_osrs) {
      return redirect("/");
    }
  },
  components: {
    BuyGoldTemplate
  },
  computed: {
    rate() {
      const currency = this.$store.state.currency.name;
      const currency_table = this.$store.state.currency_table;
      const in_usd = this.$store.state.tenant.store.currency.selling.osrs;

      return in_usd * currency_table[currency];
    }
  }
};
</script>

<style lang="scss">
</style>