<template>
  <div class="flex-1">
    <h1 class="text-3xl font-medium">{{ title }}</h1>
    <section>
      <h2 class="pb-1 text-xl border-b">Amount</h2>
      <div class="flex items-center mt-4">
        <div class="flex items-center flex-1 p-4 text-black border focus-within:border-black">
          <input
            :value="round(quantity, 2) || ''"
            @keyup="$emit('updateQuantity', $event)"
            placeholder="0"
            class="w-full focus:outline-none"
            type="text"
          />
          <span>M</span>
        </div>
        <span class="block mx-2 lg:mx-4">
          <svg
            class="w-6 text-black text-opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
            />
          </svg>
        </span>
        <div class="flex items-center flex-1 p-4 border focus-within:border-black">
          <input
            :value="round(cost, 2) || ''"
            @keyup="$emit('updateCost', $event)"
            :placeholder="rate.toFixed(3)"
            class="w-full focus:outline-none"
            type="text"
          />
          <CurrencyDropdown class="text-black hover:text-opacity-75" />
        </div>
      </div>
    </section>
    <section class="mt-8">
      <h2 class="pb-1 text-xl border-b">Payment Method</h2>
      <div class="mt-4">
        <div class="grid grid-cols-4 gap-1 md:gap-4">
          <PaymentOption
            @updatePayment="$emit('updatePayment', payment)"
            v-for="(payment, index) in payments"
            :key="index"
            :payment="payment"
            :isSelected="selected == payment"
          />
        </div>
      </div>
    </section>
    <div class="mt-6">
      <button
        @click="$emit('updateStep', 2)"
        :disabled="!selected || !quantity"
        :class="!selected || !quantity ? 'cursor-not-allowed opacity-75' : 'hover:shadow-lg focus:shadow-none'"
        class="w-full py-4 text-2xl text-white bg-black rounded focus:outline-none"
      >
        Buy Gold
        <span v-if="selected && quantity">- {{round(quantity, 2)}}M</span>
      </button>
    </div>
  </div>
</template>

<script>
import CurrencyDropdown from "@/components/CurrencyDropdown/CurrencyDropdown";
import PaymentOption from "@/components/PaymentOption/PaymentOption";
export default {
  props: ["title", "selected", "quantity", "rate", "cost"],
  components: {
    CurrencyDropdown,
    PaymentOption
  },
  methods: {
    round(num, dec) {
      num = Math.round(num + "e" + dec);
      return Number(num + "e-" + dec);
    }
  },
  computed: {
    payments() {
      return this.$store.state.tenant.payments_receive;
    }
  }
};
</script>

<style lang="scss">
</style>