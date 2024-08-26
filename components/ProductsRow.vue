<template>
  <div class="products-row-wrapper">
    <div class="container-narrow">
      <div class="products-row">
        <div class="row">
          <div v-for="item in productData" :key="item.id" class="col-50">
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

const props = defineProps({
  productData: Array,
});

const selectedProduct = ref(null);
const isModalVisible = ref(false);

function openModal(product) {
  selectedProduct.value = product;
  isModalVisible.value = true;
}
</script>

<style src="./ProductRow.scss" scoped></style>
