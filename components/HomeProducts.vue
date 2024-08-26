<template>
  <div class="home-products">
    <div class="container-narrow">
      <div class="hpr-title-row">
        <!-- <h2><i>Our</i><br /><span>Products</span></h2> -->
        <h1><i>Our</i><br /><span>Products</span></h1>
      </div>
    </div>

    <div class="container-narrow">
      <HomeSlider />
    </div>

    <div class="container-narrow">
      <div class="hpr-cta">
        <h4>
          {{ homeData.data.slices[3].primary.home_products_content }}
        </h4>
        <Button link="/products" buttonText="All Products" />
      </div>
    </div>
  </div>
</template>

<script setup>
import Button from "./Button.vue";
import HomeSlider from "./HomeSlider.vue";
import { inject } from "vue";

const homePageData = inject("homePageData");
const homeData = homePageData._rawValue;
</script>

<style src="./HomeProducts.scss" scoped></style>
