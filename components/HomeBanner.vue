<template>
  <div class="home-banner" ref="bannerContainer">
    <div class="home-banner-wrapper" ref="bannerWrapper">
      <img
        data-speed="0.9"
        ref="banner"
        src="../assets/images/sample-7.webp"
        alt=""
      />
    </div>
  </div>
</template>

<script setup>
import gsap from "gsap";
import { onMounted } from "vue";
import ScrollTrigger from "gsap/ScrollTrigger";

onMounted(() => {
  if (process.client) {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".home-banner-wrapper img", {
      y: (i, el) =>
        (1 - parseFloat(el.getAttribute("data-speed"))) *
        ScrollTrigger.maxScroll(window),
      ease: "none",
      scrollTrigger: {
        start: 0,
        end: "max",
        invalidateOnRefresh: true,
        scrub: 0,
      },
    });
  }
});
</script>

<style src="./HomeBanner.scss" scoped></style>
