<template>

    <div id="viewport">
      <div class="overlay-trans"></div>
      <Header />
      <NuxtPage /> <!-- Render the content of the pages -->
    </div>

</template>

<script setup>
import { onMounted } from 'vue'; // Import onMounted from Vue
import { useSmoothScroll } from '../composables/useSmoothScroll.js'; // Import the useSmoothScroll function
 // Import ScrollTrigger from GSAP
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger'; 
import MouseFollower from 'mouse-follower';

import {useRouter} from 'vue-router';

gsap.registerPlugin(ScrollTrigger);
const router = useRouter();

const animateOut = () => {
  const overlay = document.querySelector('.overlay-trans');
  return new Promise((resolve) => { // Pass resolve as an argument
    gsap.to(overlay, {
      height: '100vh',
      duration: 0.5, 
      ease: "expo.in",
      onComplete: resolve, // Call resolve when animation finishes
    });
  });
};

const animateIn = () => {
  const overlay = document.querySelector('.overlay-trans');

  return new Promise((resolve) => { // Pass resolve as an argument
    gsap.to(overlay, {
      height: '0%',
      duration: 1.2,
      ease: "expo.out",
      onComplete: resolve
    });
  });
};


router.beforeEach((to, from, next) => {
  animateOut().then(() => { // Wait for animation to finish before navigating
    next();
  });
});

router.afterEach(animateIn); 


onMounted(() => {
  useSmoothScroll(); 
  MouseFollower.registerGSAP(gsap);
  
  const cursor = new MouseFollower({
    el: null,
    container: document.body,
    className: 'mf-cursor',
    innerClassName: 'mf-cursor-inner',
    textClassName: 'mf-cursor-text',
    mediaClassName: 'mf-cursor-media',
    mediaBoxClassName: 'mf-cursor-media-box',
    iconSvgClassName: 'mf-svgsprite',
    iconSvgNamePrefix: '-',
    iconSvgSrc: '',
    dataAttr: 'cursor',
    hiddenState: '-hidden',
    textState: '-text',
    iconState: '-icon',
    activeState: '-active',
    mediaState: '-media',
    stateDetection: {
        '-pointer': 'a,button, .product-card, select',
        '-hidden': 'iframe',
        '-inverse': '.dark-bg',
        '-text': '.custom-slider'
    },
    // visible: true,
    // visibleOnState: false,
    speed: 0.55,
    ease: 'expo.out',
    overwrite: true,
    skewing: 0,
    skewingText: 2,
    skewingIcon: 2,
    skewingMedia: 2,
    skewingDelta: 0.001,
    skewingDeltaMax: 0.15,
    stickDelta: 0.15,
    showTimeout: 20,
    hideOnLeave: true,
    hideTimeout: 300,
    hideMediaTimeout: 300,
  
});

// Sliders
const sliders = document.querySelectorAll('.custom-slider');
if (sliders.length) { // Check if there are any sliders found
  sliders.forEach((i) => {
    i.addEventListener('mouseenter', () => {
      cursor.show();
      cursor.setText('Drag');
    });

    i.addEventListener('mousemove', (e) => {
      cursor.show();
      cursor.setText('Drag');
    });

    i.addEventListener('mousedown', () => {
      cursor.show();
      cursor.setText('Drag');
    });

    i.addEventListener('mouseleave', () => {
      cursor.removeText();
    });
  });
} else {
  console.warn("No elements found with class 'custom-slider'"); // Optional warning
}
});

</script>
<!-- You may include a style block if necessary -->
<style scoped>
/* Add your scoped styles here */

.overlay-trans {
  width: 100%;
  height: 0vh;
  background-color: #f5f5f5;
  position: fixed;
  z-index: 100000;
  left: 0;
  bottom: 0;
}
</style>
