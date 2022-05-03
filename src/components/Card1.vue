<template>
  <div class="card mb-3 border-white">
    <div class="row g-0">
      <div class="col-md-4">
        <img
          :src="$props.card_info.logo"
          class="img-fluid rounded-start"
          alt="..."
        />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{ $props.card_info.header }}</h5>
          <p class="card-text">
            {{ $props.card_info.details }}
          </p>
          <p class="card-text">
            <small class="text-muted">Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { RouterLink } from "vue-router";

export default {
  components: {
    RouterLink,
  },
  props: ["card_info"],
  data() {
    return {
      image_link: "@/assets/photos/property-2.jpg",
    };
  },
  created() {},
  methods: {
    send_code: async function () {},
  },
};
</script>

<style scoped></style>
