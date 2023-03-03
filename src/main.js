import { createApp } from 'vue'
import { firebaseApp } from '@/firebase'
import { VueFire, VueFireAuth } from 'vuefire'
import App from './App.vue'
import router from './router'

createApp(App)
    .use(router) 
    .use(VueFire, {
      // imported above but could also just be created here
      firebaseApp,
      modules: [
        // we will see other modules later on
        VueFireAuth(),
      ],
    })
    .mount('#app')

