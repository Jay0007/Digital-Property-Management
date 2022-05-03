<template>
  <div class="card text-center container border-white my-5">
    <div class="card-body">
      <p class="card-title fs-1">
        <strong> WHAT MAKES US YOUR FIRST CHOICE?</strong>
      </p>
      <hr class="border border-5 mx-auto" style="width: 20%" />

      <div class="my-5 row d-flex">
        <span
          v-for="(card, index) in cards"
          :key="index"
          class="col-8 my-3"
          :class="{ 'ms-auto': index % 2 == 1 }"
        >
          <Card1 :card_info="card" />
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import Card1 from "@/components/Card1.vue";
export default {
  components: {
    Card1,
  },
  props: [""],
  data() {
    return {
      image_link: "../assets/photos/property-2.jpg",
      cards: [
        {
          header: "TENANTS",
          details:
            "Our professional team will help you find your new home. Feel comfortable knowing your residence is professionally managed meaning you can count on us 24/7 for questions, maintenance/repairs or any other changes that arise.",
          logo: "src/assets/photos/image-1.png",
        },
        {
          header: "LANDLOADS",
          details:
            "Speak with our professional team to learn about how we can help you manage your properties while maximizing profits and the satisfaction of your tenants.",
          logo: "src/assets/photos/image-2.png",
        },
        {
          header: "PROPERTY MAINTENANCE",
          details:
            "Whether you need a one-time job done around the house or want someone on-call to respond to your tenant issues, our team of staff & contractors can get the job done.",
          logo: "src/assets/photos/image-2.png",
        },
      ],
    };
  },
  created() {},
  methods: {
    send_code: async function () {},
  },
};
</script>

<style scoped>
.border {
  border-color: #fb6a19 !important;
}
</style>
