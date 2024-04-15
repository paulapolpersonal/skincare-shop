<template lang="pug">
Menu
  MenuButton.inline-flex.justify-center.items-center.rounded-md.bg-neutral-400.px-4.py-2.text-sm.font-medium.text-white {{ title }}
    Icon(name="material-symbols:arrow-drop-down-rounded", color="white")
  MenuItems(v-for="item in items")
    MenuItem {{ item }}
</template>

<script setup>
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";

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
