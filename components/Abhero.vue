<template>
  <div class="ab-hero">
    <div class="ab-hero-img-wrapper">
      <div class="ab-hero-img">
        <img data-speed-ab="0.8" src="../assets/images/sample-4.png" alt="" />
      </div>
      <!-- <div class="curved-rectangle"></div> -->
    </div>
  </div>
</template>

<script setup>
import gsap from "gsap";
import { onMounted } from "vue";
import ScrollTrigger from "gsap/ScrollTrigger";

onMounted(() => {
  if (process.client) {
    // gsap.registerPlugin(ScrollTrigger);

    gsap.to(".ab-hero img", {
      y: (i, el) =>
        (1 - parseFloat(el.getAttribute("data-speed-ab"))) *
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

<style src="./Abhero.scss" scoped></style>
