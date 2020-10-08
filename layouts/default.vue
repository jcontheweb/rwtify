<template>
  <div v-if="$store.state.tenant && $store.state.isAuthorized" class="flex flex-col min-h-screen text-black">
    <Header />
    <main class="flex-1">
      <Nuxt />
    </main>
    <Footer />
    <!-- <div class="fixed bottom-0 right-0 p-4">
      <div class="bg-gray-020 shadow-xl overflow-hidden w-64">
        <div class="overflow-auto p-6" style="max-height: 280px">
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
    </div> -->
    <!-- <CookieConsent /> -->
  </div>
  <ProtectedPage v-else />
</template>

<script>
import ProtectedPage from '@/components/ProtectedPage/ProtectedPage'
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
export default {
  components: {
    Header,
    Footer,
    CookieConsent: () => import('@/components/CookieConsent/CookieConsent')
  }
};
</script>

<style>
body {
  font-family: "Rubik", sans-serif;
}
.container {
  @apply mx-auto max-w-6xl;
}
</style>
