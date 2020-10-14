<template>
  <div>
    <h1>swap your gold</h1>
  </div>
</template>

<script>
export default {
  middleware({ store, redirect }) {
    if (!store.state.tenant.components.menu.swap_gold) {
      return redirect("/");
    }
  }
};
</script>

<style lang="scss">
</style>