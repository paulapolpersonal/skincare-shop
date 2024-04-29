<template lang="pug">
.border.border-black.h-96.w-72.flex.flex-col.my-2.p-2.product-box(
  @mouseenter="changeImage(true)",
  @mouseleave="changeImage(false)"
)
  .h-80.py-2
    img(
      :src="product.photo",
      :id="`product-img-${product.id}`",
      @click="addToCart"
    )
  strong {{ product.name }}
  p {{ product.brand }}
  p $ {{ product.price }}
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
  product: {
    type: Object,
    default: {},
  },
});

const changeImage = (isHovered: boolean) => {
  let originalSrc = props.product.photo;
  const img = document.getElementById(
    `product-img-${props.product.id}`
  ) as HTMLImageElement;

  if (isHovered) {
    const hoverSrc = "cart.jpeg";
    if (hoverSrc) {
      img.src = hoverSrc;
    }
  } else {
    img.src = originalSrc;
  }
};

const addToCart = () => {
  const products = JSON.parse(sessionStorage.getItem("products") || "[]");
  products.push(props.product);
  sessionStorage.setItem("products", JSON.stringify(products));
};
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
