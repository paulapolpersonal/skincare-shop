<template lang="pug">
.flex.flex-col
  p.mb-4.font-semibold {{ title }}
  NuxtLink(:to="item.value ? item.value : '/'", v-for="item in items")
    div(v-if="item.text") {{item.text}}
    div(v-else) {{item}}
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  items: {
    type: Array,
    default: [],
  },
});
</script>

<style></style>
