<template>
  <div
    v-if="$store.state.tenant && $store.state.isAuthorized"
    class="flex flex-col min-h-screen text-black"
  >
    <Header />
    <main class="flex flex-col flex-1">
      <Nuxt />
    </main>
    <Footer />
    <!-- <div class="fixed bottom-0 right-0 p-4">
      <div class="w-64 overflow-hidden shadow-xl bg-gray-020">
        <div class="p-6 overflow-auto" style="max-height: 280px">
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
        </div>
      </div>
    </div>-->
    <!-- <CookieConsent /> -->
  </div>
  <ProtectedPage v-else />
</template>

<script>
import ProtectedPage from "@/components/ProtectedPage/ProtectedPage";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
export default {
  components: {
    Header,
    Footer,
    CookieConsent: () => import("@/components/CookieConsent/CookieConsent")
  },
  head() {
    return {
      // titleTemplate: `%s | ${this.$store.state.tenant.meta.title}`,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content: "My custom description"
        }
      ]
    };
  }
};
</script>

<style>
body {
  font-family: "Rubik", sans-serif;
}
.container {
  @apply mx-auto max-w-6xl px-4;
}
.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>
