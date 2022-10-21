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
};
</script>
<style>
body::-webkit-scrollbar {
  display: none;
}
</style>
