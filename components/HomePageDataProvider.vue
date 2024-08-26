<template>
    <div>
      <slot />
    </div>
  </template>
  
  <script setup>
  const { client } = usePrismic();
  
  const { data: homeData } = await useAsyncData("homePage", async () => {
    const document = await client.getByUID("home", "home");
    if (document) {
      return document;
    } else {
      throw createError({ statusCode: 404, message: "Home Page Not Found" });
    }
  });
  
  const { data: productData } = await useAsyncData("productsPage", async () => {
    const document = await client.getByUID("products", "products");
    if (document) {
      return document.data; // Replace with your product data structure
    } else {
      throw createError({ statusCode: 404, message: "Products Page Not Found" });
    }
  });
  
  provide('homePageData', homeData);
  provide('productsPageData', productData);
  </script>
  
  