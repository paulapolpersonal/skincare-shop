<template lang="pug">
.w-full.h-24.bg-black.rounded-b-sm.flex.justify-between.items-center.px-10
  NuxtLink(to="/")
    img.w-16.h-16.rounded-full(src="/logo.jpeg")
  .flex
    NuxtLink.text-white.ml-10.cursor-pointer(
      v-for="item in menuItems",
      :to="`${item.value}`"
    ) {{ item.text }}
  .w-50.flex
    Icon.w-8.h-8.mr-3.cursor-pointer(
      name="teenyicons:search-circle-outline",
      color="white"
    )
    div
      NuxtLink(to="/checkout")
        Icon.w-8.h-8.cursor-pointer(
          name="pepicons-pop:cart-circle",
          color="white"
        )
      span.cart-icon-counter(v-if="itemCount > 0") {{ itemCount }}
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from "vue";

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

const itemCount = ref<number>(0);

const updateItemCount = () => {
  const products = JSON.parse(sessionStorage.getItem("products") || "[]");
  itemCount.value = products.length;
};

onMounted(() => {
  updateItemCount();
});
</script>

<style lang="scss">
.cart-icon-counter {
  font-size: 11px;
  font-weight: 500;
  vertical-align: middle;
  line-height: 16px;
  text-align: center;
  background: #ffec00;
  border-radius: 50%;
  color: black;
  position: relative !important;
  width: 16px;
  height: 16px;
  display: inline-block;
  bottom: 10px;
}
</style>
