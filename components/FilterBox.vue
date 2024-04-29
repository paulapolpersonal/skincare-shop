<template lang="pug">
Menu(as="div")
  MenuButton.inline-flex.justify-center.items-center.rounded-md.bg-neutral-400.px-4.py-2.text-sm.font-medium.text-white(
    as="div"
  ) {{ title }}
    Icon(name="material-symbols:arrow-drop-down-rounded", color="white")
  MenuItems(v-for="item in items", as="div")
    MenuItem(as="div") {{ item }}
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
