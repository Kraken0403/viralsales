
import { HomePageDataProvider } from '#build/components';

import { NuxtLayout } from '#build/components';
<template>
  <HomePageDataProvider>
    <div id="main">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </div>
    
  </HomePageDataProvider>
</template>

<script>
import HomePageDataProvider from './components/HomePageDataProvider.vue';

export default {
  components: {
    HomePageDataProvider,
  },
};
</script>

<style>

</style>
