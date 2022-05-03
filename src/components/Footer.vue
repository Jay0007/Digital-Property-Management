<template>
  <div class="bg-dark bottom-nav mt-auto">
    <div class="container">
      <footer class="row py-5">
        <div class="col-12 col-md-4">
          <h5 class="nav-link text-white px-0 mb-2">Get in touch</h5>
          <ul class="nav flex-column">
            <li class="nav-item my-2">
              <div class="nav-link p-0 text-muted">
                <i class="bi bi-geo-alt-fill"></i> #103-106 Cumberland St N,
                Thunder Bay, Ontario P7A 4M2
              </div>
            </li>
            <li class="nav-item my-2">
              <div class="nav-link p-0 text-muted">
                <i class="bi bi-telephone-fill"></i> +1 (123) 456-7890
              </div>
            </li>
            <li class="nav-item my-2">
              <div class="nav-link p-0 text-muted">
                <i class="bi bi-envelope-fill"></i> Darryl.saldanha@gmail.com
              </div>
            </li>
          </ul>
        </div>

        <div class="col-12 col-md-4"></div>

        <div class="col-12 col-md-4">
          <h5 class="nav-link text-white px-0 mb-2">About</h5>
          <div class="nav-link text-muted px-0">
            Our company is dedicated to maximizing profits for investors and
            owners of rental property while maintaining safe and attractive
            units for our tenants. Our primary objective is to instil confidence
            with our knowledgeable and professional staff, for both our owners
            and tenants.
          </div>
        </div>
      </footer>
    </div>
  </div>
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

<style>
.bottom-nav {
  margin-top: auto;
  bottom: 0 !important;
}
</style>
