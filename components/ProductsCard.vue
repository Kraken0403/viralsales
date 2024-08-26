<template>
  <div
    class="product-card"
    @click="$emit('click', product)"
    :data-category="product.product_category"
  >
    <div class="product-card__image-wrapper">
      <div class="product-card__image">
        <img :src="product.product_image.url" alt="Product Image" />
      </div>
    </div>
    <div class="product-card-content">
      <h2>
        <strong>{{ product.product_title }}</strong>
      </h2>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  product: Object,
});
</script>

<style src="./ProductCard.scss" scoped>
/* .product-card {
  cursor: pointer;
} */

.product-card__image-wrapper img {
  width: 100%;
  height: auto;
}
</style>
