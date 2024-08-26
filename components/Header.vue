<template>
  <header class="header">
    <!-- Header content goes here -->
    <!-- Example navigation links -->

    <div class="overlay" @click="toggleMenu"></div>
    <div class="menu-wrapper" id="menu">
      <div class="menu-container">
        <div class="menu">
          <div class="menu-left">
            <div class="menu-head">
              <p>Socials</p>
            </div>
            <div class="menu-items">
              <div class="menu-item">
                <nuxt-link to="/">Instagram</nuxt-link>
              </div>

              <div class="menu-item">
                <nuxt-link to="/">Facebook</nuxt-link>
              </div>

              <div class="menu-item">
                <nuxt-link to="/">Youtube</nuxt-link>
              </div>
            </div>
          </div>
          <div class="menu-right">
            <div class="menu-head">
              <p>Links</p>
            </div>

            <div class="menu-items">
              <div class="menu-item">
                <nuxt-link to="/products" @click="toggleMenu"
                  >Products</nuxt-link
                >
              </div>

              <div class="menu-item">
                <nuxt-link to="/projects" @click="toggleMenu"
                  >Projects</nuxt-link
                >
              </div>

              <div class="menu-item">
                <nuxt-link to="/about" @click="toggleMenu">About Us</nuxt-link>
              </div>

              <div class="menu-item">
                <nuxt-link to="/contact-us" @click="toggleMenu"
                  >Contact Us</nuxt-link
                >
              </div>
            </div>
          </div>
        </div>
        <div class="menu-footer">
          <div class="menu-head">
            <p>Get in Touch</p>
          </div>
          <div class="menu-footer-contact">
            <nuxt-link>hello@viralsalesandsuppliers.com</nuxt-link>
          </div>
        </div>
      </div>
    </div>

    <div class="container-wide">
      <div class="header-container">
        <div class="logo">
          <nuxt-link to="/">
            <img src="../assets/images/logo.jpeg" alt="" class="" />
          </nuxt-link>
        </div>

        <div class="hamburger" @click="toggleMenu">
          <span class="nav-line" id="navLine1"></span>
          <span class="nav-line" id="navLine2"></span>
          <span class="nav-line" id="navLine3"></span>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { gsap } from "gsap";

export default {
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;

      if (this.isMenuOpen) {
        gsap.to("#navLine1", { rotation: 45, y: 6, duration: 0.3 });
        gsap.to("#navLine2", { opacity: 0, duration: 0.3 });
        gsap.to("#navLine3", { rotation: -45, y: -6, duration: 0.3 });
        // gsap.to(".hamburger", { rotation: -90, x: -30, duration: 0.5, ease: "power4.easeIn" });
        gsap.to(".overlay", {
          opacity: 1,
          duration: 0.3,
          delay: 0.4,
          onComplete: function () {
            document.querySelector(".overlay").style.pointerEvents = "auto";
          },
        });
        gsap.to("#menu", { right: "0%", duration: 0.9, ease: "expo.out" });
      } else {
        gsap.to("#navLine1", { rotation: 0, y: 0, duration: 0.3 });
        gsap.to("#navLine2", { opacity: 1, duration: 0.3 });
        gsap.to("#navLine3", { rotation: 0, y: 0, duration: 0.3 });
        // gsap.to(".hamburger", { rotation: 0, x: 0, duration: 0.3,  ease: "power4.easeOut" });
        gsap.to(".overlay", {
          opacity: 0,
          duration: 0.3,
          delay: 0.2,
          onComplete: function () {
            document.querySelector(".overlay").style.pointerEvents = "none";
          },
        });
        gsap.to("#menu", { right: "-100%", duration: 0.6, ease: "expo.in" });
      }
    },
  },
};
</script>

<script setup>
import ScrollTrigger from "gsap/ScrollTrigger";
import { onMounted } from "vue"; // Import onMounted from Vue

if (process.client) {
  gsap.registerPlugin(ScrollTrigger);

  onMounted(() => {
    animateHeader();
  });

  const animateHeader = () => {
    gsap.to(".header", {
      opacity: 1,
      duration: 1, // Animation duration
    });
  };
}
</script>

<style src="./Header.scss" scoped></style>
