import { createApp } from "vue";
import App from "~/App.vue";
//Vue Router
import index from "./router";

import { createPinia } from "pinia";
import { registerStore } from "./store";

import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.less";
import "~/styles/main.less";
import "~/styles/nprogress.less";

const app = createApp(App);

app.use(createPinia());
registerStore();

app.use(index);
app.use(Antd);
app.mount("#app");
