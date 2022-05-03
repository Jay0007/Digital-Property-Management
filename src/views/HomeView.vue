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
};
</script>
<style>
.page-scrolled {
  background-color: #212529;
}
</style>
