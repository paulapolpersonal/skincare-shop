<template lang="pug">
.w-full.h-24.bg-black.rounded-b-sm.flex.justify-between.items-center.px-10
  NuxtLink(to="/")
    img.w-16.h-16.rounded-full(src="/logo.jpeg")
  .flex
    NuxtLink.text-white.ml-10.cursor-pointer(
      v-for="item in menuItems",
      :to="`${item.value}`"
    ) {{ item.text }}
  .w-50
    Icon.w-8.h-8.mr-3.cursor-pointer(
      name="teenyicons:search-circle-outline",
      color="white"
    )
    Icon.w-8.h-8.cursor-pointer(name="pepicons-pop:cart-circle", color="white")
</template>

<script setup>
const menuItems = [
  {
    text: "Home",
    value: "/",
  },
  {
    text: "Products",
    value: "/products",
  },
  {
    text: "Contact",
    value: "/contact",
  },
];
</script>

<style></style>
