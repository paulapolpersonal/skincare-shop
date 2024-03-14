<template lang="pug">
div
  .h-98.bg-orange-200.flex.px-14.items-center
    .w-98.pr-14
      p.text-orange-700.mb-5 Welcome to Paula's family
      p.text-6xl.font-serif.mb-5 Glow Beyond Limits With Our Hydrating Serum
      p.text-slate-500.mb-5 Our meticulously crafted products are designed to rejuvenate, hydrate and transform your skin, revealing a luminous glow that captivates
      Button(text="Shop now")
    img.h-98.float-right.pr-36(src="/girl.png")
    div
      .text-2xl.font-semibold 44
      .p.mb-5.text-slate-500 Countries
      .text-2xl.font-semibold 5K+
      .p.mb-5.text-slate-500 Smiling Clients
      .text-2xl.font-semibold 4.9/5
      .p.mb-5.text-slate-500 Clients ratings
  .h-98.p-14.flex.items-center.justify-center
    img.parallelogram.rounded-md.h-96(src="/serum-girl.jpeg")
    .ml-16
      p.text-orange-700.mb-5 Paula's skincare overview
      p.text-6xl.font-serif.mb-5 Glowing Skin Is The Result Of Proper Skincare
      p.text-slate-500 At Paula's Choice we believe that beauty goes beyond skin deep. Our Journey began with a passion for skincare rooted in the principles of purity, science and sustainability.
      p.text-slate-500.mb-5 We exceed industry standards to ensure our producs deliver exceptional results without compormising on safety. Each product is a testament to our commitment to excellence, providing you with a skincare routine that you can trust.
      Button(text="Shop Paula's skincare now")
  .h-96.bg-orange-100.flex.px-14.items-center.justify-center
    .w-98.mr-14
      p.text-orange-700.mb-5 Offer
      p.text-6xl.font-serif.mb-5 Get 30% Off on Paula's skin Serum
      Button(text="Order our hydrating serum now")
    img.h-96(src="/serum-bottle.png")
  .h-96.p-14.flex.items-center.justify-center
    .mr-14
      p.text-orange-700.mb-5 PRODUCT QUALITY
      p.text-4xl.font-serif.mb-5 Benefits of Paula's skin Serum
      Button(text="See more info")
    .grid.grid-rows-2.w-98
      .grid.grid-cols-2
        .p-2.bg-gradient-to-r.from-orange-50.to-white
          p.text-xl.font-semibold.mb-2 Low environmental impact
          p.text-slate-500 Embrace beauty responsibly with our skincare. Low environmental impact formulas, enhancing your glow while preserving nature's harmony.
        .p-2.bg-gradient-to-r.from-blue-50.to-white
          p.text-xl.font-semibold.mb-2 Lack of artificial smell
          p.text-slate-500 Experince pure skincare bliss. our products boast a natural scent, free from artificial fragrances for an authentic, gentle touch.
      .grid.grid-cols-2
        .p-2.bg-gradient-to-r.from-pink-50.to-white
          p.text-xl.font-semibold.mb-2 No internal side effects
          p.text-slate-500 Gentle on your skin, our products promise beauty without internal side effects, prioritizing your well being and radience.
        .p-2.bg-gradient-to-r.from-yellow-50.to-white
          p.text-xl.font-semibold.mb-2 Exceeding standard
          p.text-slate-500 Redefining excellence in skincare, our commitment to exceeding industry standards ensures your skin receives unparalleled care and attention.
  .h-98.p-14.flex.items-center.justify-center.bg-orange-50
    .grid.grid-rows-2.h-72
      .p-2.flex.flex-col.items-center.justify-center
        Icon.w-8.h-8.mb-1(name="fxemoji:present")
        p.text-xl.font-serif Fast & secure delivery
      .p-2.flex.flex-col.items-center.justify-center
        Icon.w-8.h-8.mb-1(name="streamline-emojis:paw-prints")
        p.text-xl.font-serif Cruelty free
    img.h-72.mx-32(src="/women.png")
    .grid.grid-rows-2.h-72
      .p-2.flex.flex-col.items-center.justify-center
        Icon.w-8.h-8.mb-1(name="icon-park-outline:leaves", color="green")
        p.text-xl.font-serif Vegan friendly formula
      .p-2.flex.flex-col.items-center.justify-center
        Icon.w-8.h-8.mb-1(name="twemoji:delivery-truck")
        p.text-xl.font-serif Free delivery
</template>

<script setup>
</script>

<style scoped lang="scss">
.parallelogram {
  transform: skew(2deg);
}
</style>
