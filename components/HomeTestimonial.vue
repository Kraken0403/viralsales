<template>
  <div class="home-testimonials">
    <div class="container-narrow">
      <div class="ht-title">
        <h4>What They Say</h4>
      </div>

      <div class="ht-slider custom-slider">
        <swiper
          :slides-per-view="slidesPerView"
          :space-between="50"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
          :navigation="{
            nextEl: isMobile ? '.swiper-button-next' : null,
            prevEl: isMobile ? '.swiper-button-prev' : null,
          }"
          :modules="modules"
          class="mySwiper"
        >
          <swiper-slide
            v-for="(item, index) in homeData.data.slices[4].items"
            :key="index"
          >
            <div class="ht-card">
              <div class="ht-card-header">
                <h4>
                  {{ item.testimonial_name }}
                </h4>
                <p>{{ item.testimonial_date }}</p>
              </div>
              <div class="ht-card-body">
                <p>
                  {{ item.testimonial_content }}
                </p>
              </div>
            </div>
          </swiper-slide>
        </swiper>
        <div v-if="isMobile" class="swiper-navigation">
          <div class="swiper-button-prev custom-button"></div>
          <div class="swiper-button-next custom-button"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { inject } from "vue";
import { ref, onMounted, onUnmounted } from "vue";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const slidesPerView = ref(2); //Responsiveness
    const isMobile = ref(false);
    const onSlideChange = () => {
      console.log("slide change");
    };

    const homePageData = inject("homePageData");
    const homeData = homePageData._rawValue;

    //Responsiveness
    const handleResize = () => {
      console.log(window.innerWidth);
      if (window.innerWidth <= 767) {
        console.log("Inside If");
        slidesPerView.value = 1;
        isMobile.value = true;
      } else {
        console.log("Inside Else");
        slidesPerView.value = 2;
        isMobile.value = false;
      }
    };

    onMounted(() => {
      handleResize();
      window.addEventListener("resize", handleResize);
    });

    onUnmounted(() => {
      window.removeEventListener("resize", handleResize);
    });

    //Responsiveness Code Ends

    return {
      homeData,
      onSlideChange,
      slidesPerView,
      isMobile,
      modules: [Navigation, Pagination],
    };
  },
};
</script>

<style src="./HomeTestimonial.scss" scoped></style>
