<template>
  <div class="card text-center parallax">
    <div class="text-white" style="background-color: rgba(0, 0, 0, 0.8)">
      <div
        class="card-img-overlay d-flex align-items-center justify-content-center p-0 image"
      >
        <div class="">
          <h1 class="display-1 lead card-title my-4 fw-bolder">
            Saldanha Property Solutions
          </h1>
          <h2 class="fst-italic d-block d-md-none">Service You Deserve</h2>
          <h2 class="fst-italic d-block d-md-none">People You Trust</h2>

          <h5 class="d-none d-md-block fst-italic display-2">Service You Deserve</h5>
          <h5 class="d-none d-md-block fst-italic display-2">People You Trust</h5>
          <!-- <p class="display-2">People You Trust</p> -->
          <!-- <div class="my-5 d-flex justify-content-evenly">
            <button
              type="button"
              class="btn btn-primary btn-lg dark px-5 py-2 fs-3"
            >
              <router-link class="nav-link" :to="{ name: 'properties' }">
                PROPERTIES
              </router-link>
            </button>

            <button
              type="button"
              class="btn btn-dark btn-lg dark px-5 py-2 fs-3"
            >
              <router-link class="nav-link" :to="{ name: 'about-us' }">
                ABOUT US
              </router-link>
            </button>
          </div> -->
        </div>
      </div>
    </div>
    <!-- <div class="d-none d-md-block">
      <h5>First slide label</h5>
      <p>Some representative placeholder content for the first slide.</p>
    </div> -->
  </div>
</template>

<script>
import { RouterLink } from "vue-router";

export default {
  components: {
    RouterLink,
  },
  props: ["card"],
  data() {
    return {
      image_link: "../assets/photos/property-2.jpg",
    };
  },
  created() {},
  methods: {
    send_code: async function () {},
  },
};
</script>

<style scoped>
.w-100 {
  height: 750px !important;
  background: linear-gradient(300deg, black, transparent) !important;
  position: relative;
}
.carousel-caption1 {
  right: 15%;
  left: 15%;
  color: #fff;
  text-align: center;
  bottom: auto !important;
}
h1,
h5,
p {
  text-shadow: 2px 2px 10px black;
}
.parallax {
  /* The image used */
  background-image: url("/property-2.jpg");

  /* Set a specific height */
  min-height: 80vh;
  height: 800px;

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.card {
  border-radius: 0;
}
.image {
  backdrop-filter: brightness(0.5);
}
.nav-link {
  text-decoration: none;
  color: white;
}
</style>
