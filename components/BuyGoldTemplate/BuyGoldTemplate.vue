<template>
  <div class="container overflow-hidden">
    <div class="items-center justify-center lg:flex">
      <transition name="checkout" mode="out-in" v-on:before-leave="beforeLeave" v-on:before-enter="beforeEnter">
        <component
          :cost="cost"
          :title="title"
          :selected="selected"
          :rate="rate"
          :quantity="quantity"
          @updateQuantity="updateQuantity"
          @updateCost="updateCost"
          @updatePayment="updatePayment"
          @updateStep="updateStep"
          :is="step == 1 ? 'OrderDetails' : 'ConfirmTransaction'"
          :class="step == 1 ? 'order-first lg:pr-12' : 'order-last lg:pl-12'"
        ></component>
      </transition>
      <SummaryContainer class="transition duration-200 transform" ref="SummaryContainer" :rate="rate" :quantity="quantity" :selected="selected" />
    </div>
  </div>
</template>

<script>
import SummaryContainer from "./SummaryContainer";
import OrderDetails from "./OrderDetails";
import ConfirmTransaction from "./ConfirmTransaction";
export default {
  props: ["rate", "title"],
  components: {
    OrderDetails,
    ConfirmTransaction,
    SummaryContainer
  },
  data() {
    return {
      selected: null,
      quantity: "",
      cost: "",
      step: 1
    };
  },
  watch: {
    cost: function(newValue, oldValue) {
      if (parseFloat(newValue) == parseFloat(oldValue)) return;
      this.quantity = this.cost / this.rate;
    },
    quantity: function(newValue, oldValue) {
      if (parseFloat(newValue) == parseFloat(oldValue)) return;
      this.cost = this.quantity * this.rate;
    },
    rate: function(newValue, oldvalue) {
      const cost = this.rate * this.quantity;
      this.cost = cost;
    }
  },
  methods: {
    beforeLeave() {
      const SummaryContainer = this.$refs.SummaryContainer.$el
      SummaryContainer.classList.add('opacity-0')
    },
    beforeEnter() {
      const SummaryContainer = this.$refs.SummaryContainer.$el
      SummaryContainer.classList.remove('opacity-0')
    },
    updatePayment(payment) {
      this.selected = payment;
    },
    updateQuantity(event) {
      if (parseFloat(event.target.value) == parseFloat(this.quantity)) return;
      this.quantity = event.target.value;
    },
    updateCost(event) {
      if (parseFloat(event.target.value) == parseFloat(this.cost)) return;
      this.cost = event.target.value;
    },
    round(num, dec) {
      num = Math.round(num + "e" + dec);
      return Number(num + "e-" + dec);
    },
    updateStep(step) {
      this.step = step;
    },
  },
  computed: {
    payments() {
      return this.$store.state.tenant.payments_receive;
    }
  }
};
</script>

<style scoped>
.checkout-enter-active, .checkout-leave-active {
  transition: opacity .2s;
}
.checkout-enter, .checkout-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>