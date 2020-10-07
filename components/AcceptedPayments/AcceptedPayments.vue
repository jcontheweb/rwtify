<template>
  <div class="bg-gray-030 border-t border-gray-050">
    <div class="container">
      <div class="flex divide-x divide-gray-050">
        <button
          :class="payments.bitcoin ? 'hover:text-opacity-75 hover:bg-gray-020' : 'cursor-not-allowed opacity-25'"
          class="focus:outline-none text-center flex-1 text-center py-6 text-black "
        >
          <img class="mx-auto" src="https://piegp.com/dist/images/bitcoin.png" alt="">
        </button>
        <button
          :class="payments.bank_transfer ? 'hover:text-opacity-75 hover:bg-gray-020' : 'cursor-not-allowed opacity-25'"
          class="focus:outline-none flex-1 text-center py-6 text-black "
        >transfer</button>
        <button
          :class="payments.mastercard ? 'hover:text-opacity-75 hover:bg-gray-020' : 'cursor-not-allowed opacity-25'"
          class="focus:outline-none flex-1 text-center py-6 text-black "
        >
        <img class="mx-auto" src="https://piegp.com/dist/images/mastercard.png" alt=""></button>
        <button
          :class="payments.visa ? 'hover:text-opacity-75 hover:bg-gray-020' : 'cursor-not-allowed opacity-25'"
          class="focus:outline-none flex-1 text-center py-6 text-black"
        >
        <img class="mx-auto" src="https://piegp.com/dist/images/visa.png" alt=""></button>
        <button
          :class="payments.skrill ? 'hover:text-opacity-75 hover:bg-gray-020' : 'cursor-not-allowed opacity-25'"
          class="focus:outline-none flex-1 text-center py-6 text-black"
        ><img class="mx-auto" src="https://piegp.com/dist/images/skrill.png" alt=""></button>
        <button
          :class="payments.paypal ? 'hover:text-opacity-75 hover:bg-gray-020' : 'cursor-not-allowed opacity-25'"
          class="focus:outline-none flex-1 text-center py-6 text-black"
        >
        <img class="mx-auto" src="https://piegp.com/dist/images/paypal.png" alt=""></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    payments() {
      return this.$store.state.tenant.components.accepted_payments
    }
  }
};
</script>

<style lang="scss">
</style>