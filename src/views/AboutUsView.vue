<template>
  <!-- <div>
    <div class="card text-white parallax">
      <div
        class="image card-img-overlay d-flex align-items-center justify-content-center"
      >
        <div class="row container">
          <div class="col-8">
            <p class="lead fs-3">About Us</p>
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
                  About Us
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
          <strong> Who we are?</strong>
        </p>
        <hr class="border border-1 mx-auto" style="width: 10%" />

        <div class="my-5 row d-flex">
          <div class="col-md-6 col-sm-12 order-last order-md-first text-start my-auto">
            <!-- <p>
              We are real estate investors ourselves and approach our investment
              with the goal of long term success.
            </p>
            <p>
              From the beginning, we developed systems that set up our
              investment for longevity. We use a proactive mindset to avoid
              conflicts and hefty maintenance bills by maintaining a close
              relationship with our tenants and conducting regular property
              inspections.
            </p>
            <p>
              Our vetting process yields the best suited tenants for the
              property.
            </p> -->
            <p>
              Saldanha Ps InC is a family lead business and our clients are an extension of our family. 
            </p>
            <p>  
              We began this journey wanting to plan for our family's future by investing in real estate. As our venture began and grew, we spoke to others about our journey, we realized that many had similar goals but didn't have the time to manage their investment properties or didn't know where to begin/ how to go about navigating being a landlord 
            </p>
          </div>
          <div class="col-md-6 col-sm-12 order-first order-md-last">
            <img
              src="/property-5.jpg"
              class="img-fluid rounded-start"
              alt="..."
            />
          </div>
        </div>

        <div class="my-5 row d-flex flex-wrap">
          <div class="col-md-6 col-sm-12 order-0 order-md-0">
            <img
              src="/property-6.jpg"
              class="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div class="col-md-6 col-sm-12 order-1 order-md-1 text-start my-auto ">
            <!-- <p>
              As our venture was spread by word of mouth, we decided to provide
              this service to interested real estate investors looking to expand
              and diversify their portfolio in order to secure their financial
              future and combat inflation.
            </p>
            <p>
              Saldanha Property Solutions Inc is a family business and our
              clients are an extension of the Saldanha family name.
            </p> -->
            <p>
              We carefully took the time and research to ensure we are responsible home owners and landlords. We take great care of our homes and our tenants alike/ as investors you can trust that your home is in great hands. 
            </p>
          </div>
        </div>
      </div>
    </div>
  <!-- </div> -->
</template>

<script>
import Carousal from "@/components/Carousal.vue";
import HomeSection2 from "@/components/HomeSection2.vue";
export default {
  components: { Carousal, HomeSection2 },
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
  border-color: #000000 !important;
}
</style>
