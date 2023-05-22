import { createApp } from 'vue'
import './common/init.css'
import "./common/style.css"
import App from './App.vue'
import router from "./router"

const Vue = createApp(App)

// element ui plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// markdown 
import { marked } from 'marked';
Vue.config.globalProperties.markdown = function(content: string): any {
  return marked.parse(content);
}

Vue.use(ElementPlus)
Vue.use(router)
Vue.mount('#app')
