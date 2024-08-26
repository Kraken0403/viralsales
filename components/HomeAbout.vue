<template>
  <div class="home-about section">
    <div class="container-narrow">
      <div class="home-about-content">
        <h2>
          {{ homeData.data.slices[1].primary.about_company[0].text }}
        </h2>

        <Button link="/about" class="button-anim" buttonText="About Us" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from "vue";
import gsap from "gsap";
import { inject } from "vue";

const homePageData = inject("homePageData", {}); // Provide a default value
const homeData = homePageData._rawValue;

const animateAboutText = () => {
  const spans = document.querySelectorAll(".home-about-content h2 div span");

  gsap.to(spans, {
    y: "0px",
    stagger: 0.1,
    skewY: "0deg",
    ease: "power3.out",
    duration: 1,
    delay: 0.44,
    scrollTrigger: {
      trigger: ".home-about-content",
      start: "top bottom",
      end: "bottom top",
    },
  });

  gsap.from(".button-anim", {
    scale: 0.7,
    ease: "power3.in",
    scrollTrigger: {
      trigger: ".home-about-content",
      start: "top bottom",
      end: "bottom top",
    },
  });
};

onMounted(() => {
  animateAboutText();
});

onUnmounted(() => {
  // Clean up the animation
  gsap.killTweensOf(".home-about-content h2 div span");
  gsap.killTweensOf(".button-anim");
});
</script>

<style src="./HomeAbout.scss" scoped>
/* Your styles here */
</style>
