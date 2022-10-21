<template>
  <!-- <div> -->
  <!-- <div class="card text-white parallax">
      <div
        class="image card-img-overlay d-flex align-items-center justify-content-center"
      >
        <div class="row container">
          <div class="col-8">
            <p class="lead fs-3">Services</p>
            <h1 class="display-4 card-title my-4 fw-bolder">
              Saldanha Property Solutions
            </h1>
          </div>
          <div
            class="col ml-auto d-flex justify-content-end align-items-center"
          >
            <nav
              style="--bs-breadcrumb-divider: '>'"
              aria-label="breadcrumb"
              class="text-white navbar-dark"
            >
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <router-link to="/" class="text-white"> Home</router-link>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  Services
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div> -->
  <div class="card text-center container border-white my-5">
    <div class="card-body">
      <p class="card-title fs-1">
        <strong> Services We Provide</strong>
      </p>
      <hr class="border border-1 mx-auto" style="width: 10%" />

      <div class="my-5 row d-flex">
        <span
          v-for="(service, index) in $store.state.services"
          :key="index"
          class="col-sm-12 col-md-4 my-3"
        >
          <ServicesCard :service_info="service" />
        </span>
      </div>
    </div>
  </div>
  <!-- </div> -->
</template>

<script>
import ServicesCard from "@/components/ServicesCard.vue";
export default {
  components: { ServicesCard },
  created() {
    window.scrollTo(0, 0);
  },
  mounted() {
    this.removeClassHeader();
  },

  beforeUnmount() {
    // I switched the example from `destroyed` to `beforeDestroy`
    // to exercise your mind a bit. This lifecycle method works too.
  },
  methods: {
    removeClassHeader: () => {
      console.log("Method");
      let header = document.querySelector(".navbar");
      header.classList.add("navbar1");
      header.classList.remove("navbar2");
    },
  },
};
</script>
<style scoped>
/* .parallax {
  background-image: url("/property-4.jpg");

  min-height: 40vh;
  height: 300px;

  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.image {
  backdrop-filter: brightness(0.4);
} */
.card {
  border: 0;
  border-radius: 0;
}
.border {
  border-color: black !important;
}
.page-scrolled {
  background-color: #212529;
}
</style>
