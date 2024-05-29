import { createApp } from 'vue'
import './style/App.scss'
import App from './App.vue'
import './style/Home.scss'
import './style/Contact.scss'
import './style/Navigation.scss'
import './style/Footer.scss'
import router from './router/Index';

createApp(App)
  .use(router)
  .mount('#app');