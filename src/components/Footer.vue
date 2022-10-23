<template>
  <div class="bg-dark bottom-nav mt-auto" id="footer">
    <div class="container">
      <footer class="row py-5">
        <div class="col-12 col-md-6">
          <h4 class="nav-link text-white px-0 mb-4">Get in touch!</h4>
          <ul class="nav flex-column">
            <!-- <li class="nav-item my-2">
              <div class="nav-link p-0 text-muted">
                <i class="bi bi-geo-alt-fill"></i> #103-106 Cumberland St N,
                Thunder Bay, Ontario P7A 4M2
              </div>
            </li>
            <li class="nav-item my-2">
              <div class="nav-link p-0 text-muted">
                <i class="bi bi-telephone-fill"></i> +1 (123) 456-7890
              </div>
            </li> -->
            <li class="mb-3">
              <span class="text-white px-0 mb-2 h5">Via Email:</span>&nbsp;
              <!-- <div class="nav-link p-0 text-muted"> -->
              <a
                href="mailto:saldanhapropertymanagement@gmail.com"
                class="text"
                target="_blank"
              >
                <i class="bi bi-envelope-fill"></i> saldanhapropertymanagement@gmail.com
              </a>
              <!-- </div> -->
            </li>
            <li class="mb-3">
              <h5 class="nav-link text-white px-0 mb-3">
                Or fill out the form:
              </h5>
              <div class="card border-grey p-4 bg-transparent">
                <!-- <form
                  action="mailto:jaysukhadiya123@gmail.com"
                  method="post"
                  enctype="text/plain"
                  class="row"
                > -->
                <form
                  action="https://formsubmit.co/jaysukhadiya123@gmail.com"
                  method="POST"
                >
                  <div class="row mb-4">
                    <span class="text-white col-md-4"> Name: </span>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="name"
                      class="col-md-8"
                    />
                  </div>
                  <div class="row mb-4 ">
                    <span class="text-white col-md-4"> E-mail: </span>
                    <input
                      type="text"
                      name="mail"
                      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                      required
                      placeholder="abc@gmail.com"
                      class="col-md-8"
                    />
                  </div>
                  <div class="row mb-4 ">
                    <span class="text-white col-md-4"> Comment: </span>
                    <input
                      type="text"
                      name="comment"
                      placeholder="write your comment"
                      class="col-md-8"
                    />
                  </div>
                  <div class="row mb-4 ">
                    <span class="text-white col-md-4"> Phone: </span>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      pattern="[0-9]{10}"
                      required
                      placeholder="phone number"
                      class="col-md-8"
                    />
                  </div>
                  <div class="d-flex justify-content-end">
                    <input type="submit" value="Send" class="col-3 p-2 me-2" />
                    <input type="reset" value="Reset" class="col-3 p-2" />
                  </div>
                </form>
              </div>
            </li>
          </ul>
        </div>

        <div class="col-12 col-md-1"></div>

        <div class="col-12 col-md-5">
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
