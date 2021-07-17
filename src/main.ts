import { createApp } from 'vue'
import { createPinia } from 'pinia'

import './index.css'
import App from './App.vue'
import { router } from './router'
import registerGlobalComponents from './plugins/global-components'

const app = createApp(App)
app.use(router)
app.use(createPinia())

registerGlobalComponents(app)

app.mount('#app')
