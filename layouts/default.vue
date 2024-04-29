<template>
  <Navbar />
  <slot />
  <Footer />
</template>

<script setup>
import { provideUseId } from "@headlessui/vue";

provideUseId(() => useId());
</script>

<style></style>
