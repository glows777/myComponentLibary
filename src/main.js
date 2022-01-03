import { createApp } from "vue";
import App from "./App.vue";
import MYContainer from "./components/container";

const app = createApp(App);

app.use(MYContainer).mount("#app");
