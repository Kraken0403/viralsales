<template>
    <div class="product-card" :data-category="product.product_category">
      <div class="product-card__image-wrapper">
        <div class="product-card__image">
          <img :src="product.product_image.url" alt="Product Image"> </div>
      </div>
      <div class="product-card-content">
        <h2>
          <strong>{{ product.product_title }}</strong>
        </h2>
        </div>
    </div>
  </template>
  
  <script>
    export default {
      props: {
        product: Object, // Define the expected prop type
      },
    };
  </script>
  
  <style src="./ProductCard.scss" scoped></style>
  