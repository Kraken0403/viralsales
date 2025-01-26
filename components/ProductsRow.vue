<template>
  <div class="products-row-wrapper">
    <div class="container-narrow">
      <div class="products-row">
        <div class="row">
          <div v-for="item in productData" :key="item.id" class="col-33">
            <ProductsCard :product="item" @click="openModal(item)" />
          </div>
        </div>
      </div>
    </div>

    <!-- Modal Component -->
    <ProductModal
      :product="selectedProduct"
      :isVisible="isModalVisible"
      @update:isVisible="isModalVisible = $event"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import ProductsCard from "./ProductsCard.vue";
import ProductModal from "./ProductModal.vue";

// Define props to receive productData from the parent component
const props = defineProps({
  productData: {
    type: Array,
    required: true,
  },
});

onMounted(() => {
  console.log('Received productData prop:', props.productData);
});

// Modal state for the selected product
const selectedProduct = ref(null);
const isModalVisible = ref(false);

// Method to open the modal when a product is clicked
function openModal(product) {
  selectedProduct.value = product;
  isModalVisible.value = true;
}
</script>

<style src="./ProductRow.scss" scoped></style>
