<template>
  <div class="footer">
    <div class="container-narrow">
      <div class="footer-wrapper">
        <div class="row">
          <div class="col-50">
            <div class="footer-cta">
              <h2>
                Can't Decide which color suits your <br />
                place the best?
              </h2>
              <a href="/contact-us">
                <Button buttonText="Contact Us" />
              </a>
            </div>
          </div>
          <div class="col-50">
            <div class="footer-links">
              <h6>Quick Links</h6>
              <ul class="footer-menu">
                <li class="footer-item"><a href="/about">About Us</a></li>
                <li class="footer-item"><a href="/products">Products</a></li>
                <!-- <li class="footer-item"><a href="/projects">Our Work</a></li> -->
                <li class="footer-item"><a href="/projects">Projects</a></li>
                <!-- <li class="footer-item">Privacy policy</li>
                <li class="footer-item">Terms and Conditions</li> -->
              </ul>
            </div>
          </div>
        </div>
        <div class="footer-copyright">
          <div class="row" style="align-items: center">
            <div class="col-25">
              <div class="social">
                <!-- <p>Follow us:</p> -->
                <div class="social-logos">
                  <img src="../assets/images/facebook.png" alt="Facebook" />
                  <img src="../assets/images/instagram.png" alt="Instagram" />
                  <img src="../assets/images/whatsapp.png" alt="Whatsapp" />
                </div>
              </div>
            </div>
            <div class="col-25">
              <a
                href="https://maps.app.goo.gl/EARVEEsdKvrkxQU99"
                style="text-decoration: none"
                target="_blank"
                ><p>Visit Us</p></a
              >
            </div>
            <div class="col-25">
              <p>Review Us</p>
            </div>
            <div class="col-25">
              <a href="/contact-us" style="text-decoration: none"
                ><p>Contact Us</p></a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Button from "./Button.vue";
</script>

<style src="./Footer.scss" scoped></style>
