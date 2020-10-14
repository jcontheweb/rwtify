<template>
  <div class="w-full max-w-sm mt-12 lg:mt-0">
    <div class="w-full p-6 border-2 border-black">
      <div class="pb-4 text-center border-b">
        <p class="text-lg">YOU ARE BUYING</p>
        <p class="text-3xl">{{quantity ? round(quantity, 2) : 0}} M</p>
        <p class="text-sm">@ {{convert(rate, 1)}} PER MILL</p>
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
              <p class="text-sm">Payment Method</p>
              <p class="text-lg">{{ selected ? selected.name : 'None selected'}}</p>
            </div>
            <div class="pt-4">
              <p class="text-sm">Estimated Delivery Time</p>
              <p class="text-lg">< 1 minute</p>
            </div>
          </div>
        </div>
      </div>
      <div class="pt-4">
        <div class="flex items-center mb-1">
          <p>Subtotal</p>
          <span class="flex-1 block h-px mx-1 border-t border-dashed"></span>
          <p class="font-semibold">{{convert(rate,quantity)}}</p>
        </div>
        <div class="flex items-center mb-1">
          <p>Fee</p>
          <span class="flex-1 block h-px mx-1 border-t border-dashed"></span>
          <p class="font-semibold">$0.00</p>
        </div>
        <div class="flex items-center">
          <p>Total</p>
          <span class="flex-1 block h-px mx-1 border-t border-dashed"></span>
          <p class="font-semibold">{{convert(rate,quantity)}}</p>
        </div>
      </div>
    </div>
    <p class="mt-2 text-center">
      Need help?
      <nuxt-link class="font-medium" to="/">Contact Us!</nuxt-link>
    </p>
  </div>
</template>

<script>
export default {
  props: ["rate", "quantity", "selected"],
  methods: {
    convert(rate, quantity) {
      return (rate * quantity).toLocaleString("en-US", {
        style: "currency",
        currency: this.$store.state.currency.name
      });
    },
    round(num, dec) {
      num = Math.round(num + "e" + dec);
      return Number(num + "e-" + dec);
    }
  }
};
</script>

<style lang="scss">
</style>