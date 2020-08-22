import { createApp } from "vue"

// root
import Itexia from "./Itexia.vue"

// router
import router from "./router"

const Vue = createApp(Itexia).use(router)

Vue.mount("#app")
