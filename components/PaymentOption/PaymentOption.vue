<template>
  <button
    @click="$emit('updatePayment', payment)"
    :class="{'border-black opacity-100 bg-black bg-opacity-25 z-10' : isSelected}"
    class="relative flex items-center justify-center w-full p-4 text-center bg-center bg-no-repeat border opacity-75 bg-2/3 md:bg-1/2 hover:opacity-100 focus:outline-none"
    :style="`background-image:url(${payment.icon})`"
    style="padding-bottom: 56%;"
  >
    <span
      style="transform: translate(50%, -50%)"
      v-if="isSelected"
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
  </button>
</template>

<script>
export default {
  props: ["payment", "isSelected"]
};
</script>

<style lang="scss">
</style>