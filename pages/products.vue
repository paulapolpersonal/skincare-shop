<template lang="pug">
  .flex.justify-center.items-center.mt-5.mb-10
    p.text-4xl.font-serif.italic Personal care
  FilterBox(title="Filters", :items="products")
  .grid.grid-cols-4.gap-x-8.gap-y-4.place-items-center
    Product(v-for="product in productStore.products" :product="product")
</template>

<script setup>
const productStore = useProductsStore();

onMounted(() => {
  productStore.getProducts();
});

onUnmounted(() => {
  productStore.resetProducts();
});

// await useAsyncData("products", () => {
//   productStore.getProducts();
// });

const products = ["Cleansers", "Serums", "Creams", "Toners"];
</script>

<style></style>
