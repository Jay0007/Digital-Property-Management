<template>
  <div id="app" class="d-flex flex-column min-vh-100">
    <Navbar />
    <RouterView class="flex-fill" />
    <Footer />
  </div>
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import "bootstrap/dist/css/bootstrap.min.css";
export default {
  components: {
    RouterLink,
    RouterView,
    Navbar,
    Footer,
  },
  props: [""],
  data() {
    return {};
  },
  mounted() {
    window.addEventListener("scroll", this.removeClassHeader);
  },

  beforeUnmount() {
    // I switched the example from `destroyed` to `beforeDestroy`
    // to exercise your mind a bit. This lifecycle method works too.
    window.removeEventListener("scroll", this.removeClassHeader);
    console.log("removed");
  },
  methods: {
    removeClassHeader: () => {
      let header = document.querySelector(".navbar");
      if (window.scrollY > 100 && !header.className.includes("page-scrolled")) {
        header.classList.add("page-scrolled");
      } else if (window.scrollY < 100) {
        header.classList.remove("page-scrolled");
      }
    },
  },
};
</script>
<style>
body::-webkit-scrollbar {
  display: none;
}
</style>
