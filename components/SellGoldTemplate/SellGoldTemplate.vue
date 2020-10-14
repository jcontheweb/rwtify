<template>
  <div class="container">
    <div class="items-center lg:flex">
      <div class="flex-1 lg:mr-20">
        <h1 class="text-3xl font-medium">Sell Runescape Gold</h1>
        <section>
          <h2 class="pb-1 text-xl border-b">Server</h2>
          <div class="mt-4">
            <div class="grid grid-cols-2 gap-4">
              <button
                @click="gold_type = server"
                :class="{'border-black opacity-100 bg-black bg-opacity-25' : gold_type == server}"
                class="relative flex items-center justify-center w-full p-8 text-center border opacity-75 hover:opacity-100 focus:outline-none"
                v-for="(server, index) in servers"
                :key="index"
              >
                <span
                  style="transform: translate(50%, -50%)"
                  v-if="gold_type == server"
                  class="absolute top-0 right-0 flex items-center justify-center w-6 h-6 bg-black rounded-full"
                >
                  <svg
                    class="w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
                <span>{{ server }}</span>
              </button>
            </div>
          </div>
        </section>
        <section class="mt-8">
          <h2 class="pb-1 text-xl border-b">Amount</h2>
          <div class="flex items-center mt-4">
            <div class="flex items-center flex-1 p-4 text-black border focus-within:border-black">
              <input
                v-model="quantity"
                placeholder="0"
                class="flex-1 focus:outline-none"
                type="text"
              />
              <span>M</span>
            </div>
          </div>
        </section>
        <section class="mt-8">
          <h2 class="pb-1 text-xl border-b">Payout Method</h2>
          <div class="mt-4">
            <div class="grid grid-cols-4 gap-1 md:gap-4">
              <PaymentOption
                @updatePayment="updatePayment"
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
            :disabled="!selected || !quantity || !gold_type"
            :class="!selected || !quantity || !gold_type ? 'cursor-not-allowed opacity-75' : 'hover:shadow-lg focus:shadow-none'"
            class="w-full py-4 text-2xl text-white bg-black rounded focus:outline-none"
          >Request Quote</button>
        </div>
      </div>
      <div class="w-full max-w-sm mt-12 lg:mt-0">
        <div class="w-full p-6 border-2 border-black">
          <div class="pb-4 text-center border-b">
            <p class="text-lg">YOU ARE SELLING</p>
            <p class="text-3xl">{{quantity ? quantity : 0}} M</p>
            <p v-if="gold_type && quantity" class="text-sm">{{gold_type}} Gold</p>
          </div>
          <div class="py-8 border-b">
            <div class="flex">
              <div class="flex flex-col items-center">
                <span class="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full">
                  <svg
                    class="w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                    <path
                      fill-rule="evenodd"
                      d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
                <span class="flex-1 block w-px my-2 border-l border-dashed"></span>
                <span class="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full">
                  <svg
                    class="w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
              </div>
              <div class="flex-1 ml-4">
                <div class="pb-4 border-b">
                  <p class="text-sm">Payout Method</p>
                  <p class="text-lg">{{ selected ? selected.name : 'None selected'}}</p>
                </div>
                <div class="pt-4">
                  <p class="text-sm">Estimated Payout Time</p>
                  <p class="text-lg">< 1 minute after delivery</p>
                </div>
              </div>
            </div>
          </div>
          <div class="pt-4">
            <div class="flex items-center mb-1">
              <p>Flat Fee</p>
              <span class="flex-1 block h-px mx-1 border-t border-dashed"></span>
              <p class="font-semibold">FREE</p>
            </div>
            <div class="flex items-center">
              <p>Variable Fee</p>
              <span class="flex-1 block h-px mx-1 border-t border-dashed"></span>
              <p class="font-semibold">FREE</p>
            </div>
          </div>
        </div>
        <p class="mt-2 text-center">
          Need help?
          <nuxt-link class="font-medium" to="/">Contact Us!</nuxt-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import PaymentOption from "@/components/PaymentOption/PaymentOption";
export default {
  components: {
    PaymentOption
  },
  data() {
    return {
      gold_type: null,
      selected: null,
      quantity: "",
      cost: ""
    };
  },
  methods: {
    updatePayment(payment) {
      this.selected = payment;
    }
  },
  computed: {
    payments() {
      return this.$store.state.tenant.payments_send;
    },
    servers() {
      return ["OSRS", "RS3"];
    }
  }
};
</script>

<style lang="scss">
</style>