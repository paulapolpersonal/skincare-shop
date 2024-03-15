<template lang="pug">
button.py-3.px-5.rounded-full.bg-black.text-white.w-100.flex.items-center.w-100
  span.mr-2.text-sm {{ text }}
  Icon.w-5.h-5(name="mdi:arrow-right", color="rgb(185 28 28)")
</template>

<script setup>
const props = defineProps({
  text: {
    type: String,
    default: "",
  },
  url: {
    type: String,
    default: "/products",
  },
});
</script>

<style>
</style>
