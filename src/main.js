import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

/* import font awesome icon component */
// import { library } from "@fortawesome/fontawesome-svg-core";

// import { faHatWizard } from "@fortawesome/free-solid-svg-icons";

// import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
// library.add(faHatWizard);
/* add font awesome icon component */
const app = createApp(App);

app.use(router);
app.use(store);

// app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
