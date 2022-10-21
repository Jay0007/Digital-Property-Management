<template>
  <div>
    <Carousal />
    <HomeSection2 />
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
  methods: {
    
  },
  mounted() {
    this.removeClassHeader()
    window.addEventListener("scroll", this.removeClassHeader);
  },

  beforeUnmount() {
    // I switched the example from `destroyed` to `beforeDestroy`
    // to exercise your mind a bit. This lifecycle method works too.
    window.removeEventListener("scroll", this.removeClassHeader);
  },
  methods: {
    removeClassHeader: () => {
      console.log("RUNNNING")
      let header = document.querySelector(".navbar");
      if (window.scrollY > 100 && !header.className.includes("page-scrolled")) {
        header.classList.add("page-scrolled");
        
        // header.classList.add("navbar2");
      } else if (window.scrollY < 100) {
        header.classList.remove("page-scrolled");
        header.classList.remove("navbar1");
      }
    },
  },
};
</script>
<style>
.page-scrolled {
  background-color: #212529;
}
</style>
