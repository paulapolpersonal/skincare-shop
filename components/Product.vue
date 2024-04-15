<template lang="pug">
  div.border.border-black.h-96.w-72.flex.flex-col.my-2.p-2.product-box
    div.h-80.py-2
      img(:src="product.photo")
    strong {{product.name}}
    p {{product.brand}}
    p $ {{product.price}}
</template>

<script setup>
const props = defineProps({
  product: {
    type: Object,
    default: {},
  },
});
</script>

<style lang="scss">
.product-box {
  cursor: pointer;
  border: 0;
  border-radius: 4px;
  font-weight: 400;
  box-shadow: 0 0 20px rgb(255 247 237);
  transition: 0.4s;
  background-color: white;
  color: black;

  &:hover {
    color: white;
    box-shadow: 0 0 20px rgb(253 186 116);
    background-color: rgb(194 65 12);
  }
}
</style>
