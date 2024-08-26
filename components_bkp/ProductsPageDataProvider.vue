<template>
    <div>
      <slot />
    </div>
  </template>
  
  <script setup>
  const { client } = usePrismic();
//   console.log('jheriu')
  const { data: document } = await useAsyncData("page", async () => {
  const document = await client.getByUID("products", "products");
  if (document) {
    return document;
  } else {
    throw createError({ statusCode: 404, message: "Source Not Found" });
  }
});
  provide('ProductsPageData', document);
  </script>
  