<template>
  <div>
    <div class="card text-white parallax">
      <div
        class="image card-img-overlay d-flex align-items-center justify-content-center"
      >
        <div class="row container">
          <div class="col-8">
            <p class="lead fs-3">Properties</p>
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
                  Properties
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      <!-- <div class="d-none d-md-block">
      <h5>First slide label</h5>
      <p>Some representative placeholder content for the first slide.</p>
    </div> -->
    </div>
    <div class="card text-center container border-white my-5">
      <div class="card-body">
        <p class="card-title fs-1">
          <strong> Properties we have</strong>
        </p>
        <hr class="border border-5 mx-auto" style="width: 10%" />

        <div class="my-5 row d-flex">
          <span
            v-for="(property, index) in $store.state.properties"
            :key="index"
            class="col-5 my-3"
            :class="{ 'ms-auto': index % 2 == 1 }"
          >
            <PropertyCard :property_info="property" />
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PropertyCard from "@/components/PropertyCard.vue";
export default {
  components: { PropertyCard },
  data() {
    return {};
  },
};
</script>
<style scoped>
.parallax {
  /* The image used */
  background-image: url("@/assets/photos/property-4.jpg");

  /* Set a specific height */
  min-height: 80vh;
  height: 800px;

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.image {
  backdrop-filter: brightness(0.4);
}

.border {
  border-color: #fb6a19 !important;
}
</style>
