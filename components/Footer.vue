<template lang="pug">
  div.w-full.min-h-64.bg-black.rounded-b-sm.justify-between.items-center.p-10.bottom-0.text-white.font-light
    div.grid.grid-cols-6.gap-6
      div.flex.flex-col.col-span-2
        p.mb-4.font-semibold About Paula
        p.break-words Thousands of people have benefited from our services. But let's be real - there's no magic bullet, just science. That's why we do what we do
      div.flex.flex-col
        p.mb-4.font-semibold Pages
        NuxtLink(v-for="item in menuItems" :to="`${item.value}`").cursor-pointer {{ item.text }}
      div.flex.flex-col
        p.mb-4.font-semibold Products
        p(v-for="product in products").cursor-pointer {{ product }}
      div.flex.flex-col
        p.mb-4.font-semibold Help
        p(v-for="item in helpSection").cursor-pointer {{ item }}
      div.flex.flex-col
        p.mb-4.font-semibold Contact us
        div(v-for="item in contactItems").cursor-pointer.flex.items-center
          Icon(:name="item.icon" color="white").w-4.h-4.mr-3
          p {{ item.text }}
    hr.my-10
    div.flex.justify-between.items-center
      p Copyright, All rights reserved by Paula
      img(src="/logo.jpeg").w-16.h-16.rounded-full

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

    const products = reactive(["Cleansers", "Serums", "Creams", "Toners"]);

    const helpSection = reactive(["Shipping and return", "Track order", "FAQ"]);

    const contactItems = reactive([
      {
        text: "hello@paula.com",
        icon: "ri:send-plane-fill",
      },
      {
        text: "(021) 555-0124",
        icon: "material-symbols:call",
      },
      {
        text: "2618 Ocean City, Maryland",
        icon: "material-symbols:location-on-rounded",
      },
    ]);

    return { menuItems, products, helpSection, contactItems };
  },
};
</script>

<style></style>
