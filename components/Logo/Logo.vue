<template>
  <nuxt-link to="/">
    <img :src="src" alt />
  </nuxt-link>
</template>

<script>
export default {
  props: ["color"],
  computed: {
    src() {
      const logo = this.$store.state.tenant.components.logo;

      return this.color == "light" ? logo.light : logo.dark;
    }
  }
};
</script>

<style lang="scss">
</style>