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
        <p>Description: {{ product.product_description }}</p>
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
