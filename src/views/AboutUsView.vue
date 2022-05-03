<template>
  <div>
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
    </div>
    <div class="card text-center container border-white my-5">
      <div class="card-body">
        <p class="card-title fs-1">
          <strong> Who we are?</strong>
        </p>
        <hr class="border border-5 mx-auto" style="width: 10%" />

        <div class="my-5 row d-flex">
          <div class="col-6 text-start my-auto">
            <p>
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
            </p>
          </div>
          <div class="col-6">
            <img
              src="/property-5.jpg"
              class="img-fluid rounded-start"
              alt="..."
            />
          </div>
        </div>

        <div class="my-5 row d-flex">
          <div class="col-6">
            <img
              src="/property-6.jpg"
              class="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div class="col-6 text-start my-auto">
            <p>
              As our venture was spread by word of mouth, we decided to provide
              this service to interested real estate investors looking to expand
              and diversify their portfolio in order to secure their financial
              future and combat inflation.
            </p>
            <p>
              Saldanha Property Solutions Inc is a family business and our
              clients are an extension of the Saldanha family name.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Carousal from "@/components/Carousal.vue";
import HomeSection2 from "@/components/HomeSection2.vue";
export default {
  components: { Carousal, HomeSection2 },
  created() {
    window.scrollTo(0, 0);
  },
};
</script>
<style scoped>
.parallax {
  /* The image used */
  background-image: url("/property-4.jpg");

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
.card {
  border: 0;
  border-radius: 0;
}
.border {
  border-color: #fb6a19 !important;
}
</style>
