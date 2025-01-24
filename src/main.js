import { createApp } from "vue"
import { createPinia } from 'pinia'
// import i18n from '@/i18n'
import { productStore } from "@/stores/productStore";

import App from "@/App.vue"
import router from '@/router'


const app = createApp(App)

app.use(createPinia())
app.use(router)
// app.use(i18n)

const store = productStore();
store.loadProducts();

app.mount("#app")
