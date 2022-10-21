<template>
  <nav
    class="navbar navbar-expand-md navbar-dark"
    :class="$store.state.navbarProperties.position"
  >
    <div class="container justify-content-md-around">
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
        class="navbar-collapse justify-content-end collapse"
        id="navbarNavAltMarkup"
      >
        <ul class="navbar-nav">
          <li class="nav-item ms-auto">
            <router-link class="nav-link fs-4 mx-2" aria-current="page" to="/"
              ><span
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavAltMarkup"
                >Home</span
              ></router-link
            >
          </li>
          <li class="nav-item ms-auto">
            <router-link class="nav-link fs-4 mx-2" :to="{ name: 'services' }"
              ><span
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavAltMarkup"
                >Services</span
              >
            </router-link>
          </li>
          <li class="nav-item ms-auto">
            <router-link class="nav-link fs-4 mx-2" :to="{ name: 'about-us' }"
              ><span
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavAltMarkup"
                >About Us</span
              ></router-link
            >
          </li>
          <!-- <router-link class="nav-link fs-4 mx-2" :to="{ name: 'properties' }"
            >Properties</router-link
          > -->
        </ul>
        <!-- <div class="d-flex mx-2">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <button
                class="btn btn-light"
                type="submit"
                background-color="#d7bc6f"
                @click="scroll"
              >
                CONTACT
              </button>
            </li>
          </ul>
        </div> -->
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
    scroll() {
      const element = document.getElementById("footer");
      element.scrollIntoView({ behavior: "smooth" });
    },
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
.navbar1 {
  position: sticky;
  z-index: 1;
  top: 0px;
  background-color: #212529;
}
.navbar2 {
  position: relative;
  z-index: 1;
  top: 0px;
}
</style>
