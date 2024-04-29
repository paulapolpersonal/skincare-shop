<template lang="pug">
.flex.justify-center.items-center.mt-5.mb-10
  p.text-4xl.font-serif.italic Personal care
.flex.ml-2.mb-12
  FilterBox.mr-2(title="Filters", :items="products")
  FilterBox(title="Sort by", :items="sortingCriteria")
.grid.grid-cols-4.gap-x-8.gap-y-4.place-items-center
  Product(v-for="product in productStore.products", :product="product")
</template>

<script setup>
const productStore = useProductsStore();

onMounted(() => {
  productStore.getProducts();
});

onUnmounted(() => {
  productStore.resetProducts();
});

const products = ["Cleansers", "Serums", "Creams", "Toners"];
const sortingCriteria = ["Price Asc", "Price Desc", "Newest"];
</script>

<style></style>
