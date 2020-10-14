<template>
  <div>
    <Hero v-if="components.hero.show" />
    <AcceptedPayments v-if="components.accepted_payments.show" />
    <OrderProcess v-if="components.order_process.show" />
    <BuyGold v-if="components.cta.buy_gold.show" />
  </div>
</template>

<script>
export default {
  components: {
    Hero: () => import('@/components/Hero/Hero'),
    AcceptedPayments: () => import('@/components/AcceptedPayments/AcceptedPayments'),
    OrderProcess: () => import('@/components/OrderProcess/OrderProcess'),
    BuyGold: () => import('@/components/CallToAction/BuyGold'),
  },
  head() {
    return {
      title: this.$store.state.tenant.meta.title,
    };
  },
  computed: {
    components() {
      return this.$store.state.tenant.components
    }
  }
};
</script>