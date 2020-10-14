<template>
  <div>
    <h1>rent a main</h1>
  </div>
</template>

<script>
export default {
  middleware({ store, redirect }) {
    if (!store.state.tenant.components.menu.rent_main) {
      return redirect("/");
    }
  }
};
</script>

<style lang="scss">
</style>