<template lang="pug">
  div.w-full.h-24.bg-black.rounded-b-sm.flex.justify-between.items-center.px-10
    NuxtLink(to="/")
      img(src="/logo.jpeg").w-16.h-16.rounded-full
    div.flex
      NuxtLink(v-for="item in menuItems" :to="`${item.value}`").text-white.ml-10.cursor-pointer {{ item.text }}
    div.w-50
      Icon(name="teenyicons:search-circle-outline" color="white").w-8.h-8.mr-3.cursor-pointer
      Icon(name="pepicons-pop:cart-circle" color="white").w-8.h-8.cursor-pointer
</template>

<script>
import { reactive } from "vue";

export default {
  setup() {
    const menuItems = reactive([
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
    ]);

    return { menuItems };
  },
};
</script>

<style></style>
