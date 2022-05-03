import { createStore } from "vuex";

// Create a new store instance.
const store = createStore({
  state() {
    return {
      count: 0,
      properties: [
        {
          available: true,
          header: "1 Bedroom Apartment",
          rent: 750,
          id: 1,
          bedrooms: 1,
          bathroom: 1,
          address: "118B Huntington Court, Thunder Bay, ON, Canada",
          postal_code: "P7C 2B6",
          Property_status: "For rent",
          electric_ange: true,
          fire_alarm: true,
          laundry_room: true,
          refrigerator: true,
          hydro: true,
          heat: true,
          water: true,
          parking: 3,
          agreement_type: "1 Year",
          pet_allowed: "Yes",
          wifi: false,
          furnished: false,
          appliances: [
            "Laundry (In Building)",
            "Dishwasher",
            "Fridge / Freezer",
          ],
          smokking: false,

          photo: "src/assets/photos/property-1.jpg",
        },
        {
          available: false,
          header: "2 Bedroom Apartment",
          rent: 750,
          id: 2,
          bedrooms: 2,
          bathroom: 1,
          address: "118B Huntington Court, Thunder Bay, ON, Canada",
          postal_code: "P7C 2B6",
          Property_status: "For rent",
          electric_ange: true,
          fire_alarm: true,
          laundry_room: true,
          refrigerator: true,
          hydro: true,
          heat: true,
          water: true,
          parking: 3,
          agreement_type: "1 Year",
          pet_allowed: "Yes",
          wifi: false,
          furnished: false,
          appliances: [
            "Laundry (In Building)",
            "Dishwasher",
            "Fridge / Freezer",
          ],
          smokking: false,

          photo: "src/assets/photos/property-4.jpg",
        },
      ],
      services: [
        {
          logo: "",
          details: "Property acquisition",
        },
        {
          logo: "search",
          details: "Initial Property inspection and Set up",
        },
        {
          logo: "camera-fill",
          details: "Photos and advertising",
        },
        {
          logo: "bank2",
          details: "In-depth Tenant screening",
        },
        {
          logo: "key-fill",
          details: "Rent collection",
        },
        {
          logo: "hospital-fill",
          details: "24/7 emergency service",
        },
        {
          logo: "tools",
          details:
            "Organizing & planning repairs and renovations with local insured professionals",
        },
        {
          logo: "plugin",
          details: "Property inspections",
        },
        {
          logo: "credit-card-fill",
          details: "Financial statements",
        },
        {
          logo: "mortarboard-fill",
          details: "Access to counsel",
        },
      ],
    };
  },
  mutations: {
    increment(state) {
      state.count++;
    },
  },
});
export default store;
