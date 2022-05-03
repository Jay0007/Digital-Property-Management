<template>
  <nav class="navbar fixed-top navbar-expand-lg">
    <div class="container justify-content-around">
      <router-link class="navbar-brand" :to="{ name: 'home' }">
        <img src="../assets/logo/sps-logo.png" alt="" width="180" />
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse d-flex justify-content-end ml-5"
        id="navbarNavAltMarkup"
      >
        <div class="navbar-nav">
          <router-link class="nav-link fs-4 mx-2" aria-current="page" to="/"
            >Home</router-link
          >
          <router-link class="nav-link fs-4 mx-2" :to="{ name: 'services' }"
            >Services</router-link
          >
          <router-link class="nav-link fs-4 mx-2" :to="{ name: 'about-us' }"
            >About Us</router-link
          >
          <router-link class="nav-link fs-4 mx-2" :to="{ name: 'properties' }"
            >Properties</router-link
          >
        </div>
      </div>
      <div class="d-flex mx-2">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <button
              class="btn btn-light"
              type="submit"
              background-color="#d7bc6f"
            >
              CONTACT
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { RouterLink } from "vue-router";

export default {
  components: {
    RouterLink,
  },
  props: [""],
  data() {
    return {};
  },
  created() {},
  methods: {
    send_code: async function () {},
  },
};
</script>

<style scoped>
.router-link-exact-active {
  color: #d7bc6f !important;
}
.nav-link {
  text-decoration: none;
  color: white;
}
.nav-link:hover {
  color: #d7bc6f;
}
</style>
