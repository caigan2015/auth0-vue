/*
 * @Author: 
 * @Date: 2022-03-08 16:24:48
 * @Descripttion: 
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { setupAuth } from './auth'
import authConfig from '../auth_config.json'

const app = createApp(App)

app.use(router)
app.use(store)

setupAuth(authConfig, appState => {
  router.push(
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  );
}).then(auth => {
  app.use(auth).mount('#app')
})
