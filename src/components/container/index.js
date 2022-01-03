// import { App } from "vue";
import MYContainer from "./Container.vue";


export default {
  // ! app必须是App类型
  install(app) {
    app.component(MYContainer.name, MYContainer);
  },
};
