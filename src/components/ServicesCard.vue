<template>
  <div class="card">
    <i class="bi fs-1 icon-color" :class="`bi-${$props.service_info.logo}`"></i>
    <div class="card-body">
      <p class="card-text">
        {{ $props.service_info.details }}
      </p>
    </div>
  </div>
</template>

<script>
import { RouterLink } from "vue-router";

export default {
  components: {
    RouterLink,
  },
  props: ["service_info"],
  data() {
    return {
      image_link: "@/assets/photos/property-2.jpg",
    };
  },

  methods: {
    send_code: async function () {},
  },
};
</script>

<style scoped>
.icon-color {
  color: #d7bc6f;
}
</style>
