<template>

  <nuxt-link :to="link" class="custom-button" @mouseenter="hoverText" @mouseleave="clearText">
    
      <div class="spans">
        <span class="original">{{ buttonText }}</span>
        <span class="replace">{{ buttonText }}</span>
      </div>
    
    
    </nuxt-link>

</template>

<script setup>
  import gsap from 'gsap';

    const props = defineProps({
        buttonText: String,
        link: String
    })


    const hoverText = () => {
      gsap.to('.original', {
        top: '-105%',
        ease: 'power3.out',
        duration: 0.3
      })

      gsap.to('.replace', {
        top: '0%',
        ease: 'power3.out',
        duration: 0.3

      })

      const t1 = gsap.timeline()

      t1.to('.custom-button', {
        scale:'1.3',
        ease: 'power3.out',
        duration: 0.1,
        delay: 0
      }).to('.custom-button', {
        scale: '1.0',
        ease: 'power3.out',
        duration: 0.1,
        delay: 0
      })
    // You can call any function or execute any code you want here
    };

    const clearText = () => {
     
        gsap.to('.original', {
          top: '0%',
          ease: 'power3.out',
          duration: 0.3

        })

        gsap.to('.replace', {
          top: '100%',
          ease: 'power3.out',
        duration: 0.3

        })
    // You can call any function or execute any code you want here
  };

    
</script>

<style src="./Button.scss" scoped></style>