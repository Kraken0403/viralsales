import { ref } from 'vue'; // Ensure you import `ref` from Vue
import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger'; // Import ScrollTrigger from GSAP

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

export const scrollY = ref(0);

export const useSmoothScroll = () => {
    const scrollLenis = new Lenis({
        lerp: 0.08,
        duration: 1.4,
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true
    });

    function raf(time) {
        scrollLenis.raf(time);
        requestAnimationFrame(raf);
    }
      
    requestAnimationFrame(raf);

    scrollLenis.on('scroll', (e) => {
        scrollY.value = e.scrollY;
        ScrollTrigger.update(); // Ensure ScrollTrigger is updated
    });

    gsap.ticker.add((time) => {
        scrollLenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);
};
