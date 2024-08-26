<template>
    <div class="hs-slider custom-slider">
    <swiper
      :slides-per-view="2"
      :space-between="50"
      @swiper="onSwiper"
      @slideChange="onSlideChange"

    >

      <swiper-slide v-for="(item, index) in homeData.data.slices[3].items" :key="index">
        <div class="hs-slide">
          <img :src=item.home_product_image.url alt="">
          <h2>{{ item.home_product_title }}</h2>
        </div>
      </swiper-slide>
    </swiper>
    </div>
  </template>
  <script>
    // Import Swiper Vue.js components
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import { Navigation, Pagination } from 'swiper/modules';
    // Import Swiper styles
    import 'swiper/css';
    import 'swiper/css/navigation';
    import 'swiper/css/pagination';
    import { inject } from 'vue';

    export default {
      components: {
        Swiper,
        SwiperSlide
      },
      setup() {
        const onSlideChange = () => {
          console.log('slide change');
        };

        const homePageData = inject('homePageData');

        const homeData = homePageData._rawValue; // Ensure data is available

        return {
          homeData,
          onSlideChange,
          modules: [Navigation, Pagination],
        };
      },
    };
    

  

  </script>

  <style scoped src="./HomeSlider.scss"></style>
  