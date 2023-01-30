import { createApp } from 'vue'
import { store } from '../src/store/index'

import App from './App.vue'

const app = createApp(App)

app.use(store)
app.mount('#app')