<template>
    <div class="home-hero">
        <div class="container-narrow">
            <div class="hero-text">
                <h1>
                    <div ref="firstText">
                        <i><span>Colors</span> <span>that inspire</span></i>
                    </div>
                    <div>
                        <span><i>the</i>
                            <div class="hero-text-image">
                            
                                <!-- <img src="../assets/images/sample.png" alt=""> -->
                                <video autoplay loop>
                                    <source :src= homeData.data.slices[0].primary.video.url >
                                </video>
                            </div>
                        </span>
                        <span>space in</span>
                    </div>
                    
                    <div>
                        <span>between</span>
                    </div>
                </h1>
            </div>
        </div>
 
    </div>

</template>

<script setup>
import gsap from 'gsap';
import { onMounted } from 'vue'; // Import onMounted from Vue


onMounted(() => {
    animateText();
});

const animateText = () => {
    gsap.to('.hero-text span', {
    y: '0px',
    stagger: 0.1,
    // skewY: '10deg',
    ease: 'power3.out', // You can change the easing function
    duration: 1,
    delay: 0.44
     // Animation duration
  })
}

// Querying Data

import { inject } from 'vue';

const homePageData = inject('homePageData');
const homeData = homePageData._rawValue;

</script>

<style src="./HomeHero.scss" scoped></style>
