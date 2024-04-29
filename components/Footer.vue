<template lang="pug">
.w-full.min-h-64.bg-black.rounded-b-sm.justify-between.items-center.p-10.bottom-0.text-white.font-light
  .grid.grid-cols-6.gap-6
    .flex.flex-col.col-span-2
      p.mb-4.font-semibold About Paula
      p.break-words Thousands of people have benefited from our services. But let's be real - there's no magic bullet, just science. That's why we do what we do
    FooterSection(title="Pages", :items="menuItems")
    FooterSection(title="Products", :items="products")
    FooterSection(title="Help", :items="helpSection")
    .flex.flex-col
      p.mb-4.font-semibold Contact us
      div.cursor-pointer.flex.items-center(v-for="item in contactItems")
        Icon.w-4.h-4.mr-3(:name="item.icon", color="white")
        p {{ item.text }}
  hr.my-10
  .flex.justify-between.items-center
    p Copyright, All rights reserved by Paula
    img.w-16.h-16.rounded-full(src="/logo.jpeg")
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

const products = ["Cleansers", "Serums", "Creams", "Toners"];

const helpSection = ["Shipping and return", "Track order", "FAQ"];

const contactItems = [
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
];
</script>

<style></style>
