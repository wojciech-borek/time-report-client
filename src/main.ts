import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'; 
import Loader from './components/Loader.vue'; 

const app = createApp(App)

app.use(router)
app.use(store); 
app.component('Loader', Loader); // Rejestracja komponentu Loader

app.mount('#app')
