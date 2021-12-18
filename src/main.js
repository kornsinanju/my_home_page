import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'


// const router = VueRouter.createRouter({
//     // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
//     history: VueRouter.createWebHashHistory(),
//     routes, // short for `routes: routes`
//   })

const app = createApp(App)
// app.use(router)
app.use(router).mount('#app')
