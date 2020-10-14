<template>
  <div class="flex items-center py-8 lg:py-24">
    <SellGoldTemplate title="Sell Runescape Gold" />
  </div>
</template>

<script>
import SellGoldTemplate from "@/components/SellGoldTemplate/SellGoldTemplate";
export default {
  middleware({ store, redirect }) {
    if (!store.state.tenant.components.menu.sell_gold) {
      return redirect("/");
    }
  },
  components: {
    SellGoldTemplate
  }
};
</script>

<style lang="scss">
</style>