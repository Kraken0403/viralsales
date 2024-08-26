<template>
  <div v-if="isVisible" class="modal-overlay" @click.self="closeModal">
    <div class="modal-content">
      <button class="close-button" @click="closeModal">X</button>
      <!-- <div class="modal-image">
        <img :src="product.product_image.url" alt="Product Image" />
      </div> -->
      <div class="modal-details">
        <h2>{{ product.product_title }}</h2>
        <p class="category">{{ product.product_category }}</p>
        <p class="description"><span>Description: </span>{{ product.product_description[0]?.text }}</p>
        <div class="features">
          <h4>Features:</h4>
          <div class="features-wrapper">
            <div class="ft-col">
              <h6>{{ product.feature_one }}</h6>
              <h6>{{ product.feature_two }}</h6>
              <h6>{{ product.feature_three }}</h6>
            </div>
            <div class="ft-col">
              <h6>{{ product.feature_four }}</h6>
              <h6>{{ product.feature_five }}</h6>
              <h6>{{ product.feature_six }}</h6>
            </div>
          </div>
        </div>
        <div class="action-buttons">
          <nuxt-link to="/contact-us" @click="toggleMenu"
                  >Enquire Now</nuxt-link
                >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  product: Object,
  isVisible: Boolean,
});

const emit = defineEmits(["update:isVisible"]);

function closeModal() {
  emit("update:isVisible", false);
}
</script>

<style src="./ProductModal.scss" scoped></style>
