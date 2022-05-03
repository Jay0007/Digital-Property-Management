<template>
  <div class="card rounded-start" style="">
    <img :src="$props.property_info.photo" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">{{ $props.property_info.header }}</h5>
      <h5 class="card-title">$ {{ $props.property_info.rent }}</h5>
    </div>
    <ul class="list-group list-group-flush text-start">
      <li class="list-group-item">
        <i class="bi bi-geo-alt-fill"></i>
        {{ $props.property_info.address }}
      </li>
      <li class="list-group-item">
        <i class="bi bi-house-fill"></i>
        {{ $props.property_info.Property_status }}
      </li>
      <li class="list-group-item">
        <i class="bi bi-hourglass-split"></i>
        {{ $props.property_info.agreement_type }}
      </li>
    </ul>
    <div class="card-body text-white bg-primary d-flex justify-content-evenly">
      <span>
        <i class="bi bi-water"></i>
        &nbsp;
        <span class="card-text">
          {{ $props.property_info.bedrooms }}
        </span>
      </span>
      <span>
        <i class="bi bi-align-start"></i>
        &nbsp;
        <span class="card-text">
          {{ $props.property_info.bedrooms }}
        </span>
      </span>
      <span>
        <i class="bi bi-bicycle"></i>
        &nbsp;
        <span class="card-text">
          {{ $props.property_info.parking }}
        </span>
      </span>
    </div>
  </div>
</template>

<script>
import { RouterLink } from "vue-router";

export default {
  components: {
    RouterLink,
  },
  props: ["property_info"],
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

<style scoped></style>
