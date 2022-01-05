// import { App } from "vue";
import MYAside from "./Aside.vue";
import MYContainer from "./Container.vue";
import MYFooter from "./Footer.vue";
import MYHeader from "./Header.vue";
import MYMain from "./Main.vue";

export default {
  // ! app必须是App类型
  install(app) {
    app.component(MYContainer.name, MYContainer);
    app.component(MYFooter.name, MYFooter);
    app.component(MYHeader.name, MYHeader);
    app.component(MYMain.name, MYMain);
    app.component(MYAside.name, MYAside);
  },
};
