import { createApp } from 'vue'
import './style.css'
import 'aos/dist/aos.css'
import App from './App.vue'
import AOS from 'aos'

createApp(App).mount('#app')

AOS.init({
  duration: 700,
  once: false,
  mirror: true,
  easing: 'ease-out-cubic',
  offset: 60,
})
