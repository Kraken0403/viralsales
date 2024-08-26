<template>
  <div class="ab-image">
    <div class="container-narrow">
      <div class="ab-image-wrapper">
        <div class="ab-image-img">
          <img data-speed-ab="0.9" src="../assets/images/team.jpg" alt="" />
        </div>
      </div>
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

    gsap.to(".ab-image-img img", {
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

<style src="./Abimage.scss" scoped></style>
