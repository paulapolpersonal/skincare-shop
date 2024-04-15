import { defineStore } from "pinia";
import { Product } from "types/product";

export const useProductsStore = defineStore("products", () => {
  const products = ref([] as Product[]);
  const product = ref({ name: "Ana" });

  const getProducts = async () => {
    try {
      const data = await $fetch(
        "https://65d230ea987977636bfc0fef.mockapi.io/api/products",
        {
          method: "GET",
        }
      );
      if (data) products.value.push(...data);
      // if (data) products.value = data;
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const resetProducts = () => {
    products.value = [];
  };

  return { products, product, getProducts, resetProducts };
});
