<template>
  <div>
    <slot :productData="productData" />
  </div>
</template>

<script setup>
import { ref, provide, onMounted } from "vue";
import { usePrismic } from "@prismicio/vue"; // Adjust import based on your setup

const { client } = usePrismic();

const productData = ref([]);

async function fetchData() {
  try {
    const { data: document } = await useAsyncData("page", async () => {
      const document = await client.getByUID("products", "products");
      if (document) {
        return document.data; // Adjust according to your data structure
      } else {
        throw createError({ statusCode: 404, message: "Source Not Found" });
      }
    });

    if (document.value) {
      productData.value = document.value.products || []; // Adjust according to your data structure
    }
  } catch (error) {
    console.error(error);
  }
}

onMounted(fetchData);
provide("ProductsPageData", productData);
</script>
