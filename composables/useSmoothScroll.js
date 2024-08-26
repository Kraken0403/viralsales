import Lenis from '@studio-freight/lenis';

export const scrollY = ref(0);

export const useSmoothScroll = async () => {
    const gsap = await import('gsap');
    const { ScrollTrigger } = await import('gsap/ScrollTrigger');
    gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger plugin dynamically

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
        ScrollTrigger.update(); // Ensure ScrollTrigger updates on scroll
    });

    gsap.ticker.add((time) => {
        scrollLenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);
};
