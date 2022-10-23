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
          class="col-md-8 col-12 my-3"
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
            "Our professional team will help you find your new home. Feel comfortable knowing your residence is professionally managed. You can count on us 24/7 for questions, maintenance/repairs or any other changes that arise.",
          logo: "/image-1.png",
        },
        {
          header: "LANDLORDS",
          details:
            "Speak with our professional team to learn about how we can help you manage your properties while maximizing profits and the satisfaction of your tenants.",
          logo: "/image-2.png",
        },
        {
          header: "PROPERTY MAINTENANCE",
          details:
            "We only work with local and insured contractors to maintain our properties and conduct repairs. Our property managers regularly inspect the rentals to maintain the highest level of quality.",
          logo: "/image-2.png",
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
