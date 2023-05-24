import { createApp } from 'vue'
import './common/init.css'
import "./common/style.css"
import App from './App.vue'
import router from "./router"

const Vue = createApp(App)

// element ui plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
Vue.use(ElementPlus)

// markdown 
import { marked } from 'marked';
Vue.config.globalProperties.markdown = function(content: string): any {
  return marked.parse(content);
}

//MdEditor 富文本编辑器
import { MdEditor, MdPreview, MdCatalog } from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';
import 'md-editor-v3/lib/preview.css';
Vue.component("MdEditor", MdEditor)
Vue.component("MdPreview", MdPreview)
Vue.component("MdCatalog", MdCatalog)


Vue.use(router)
Vue.mount('#app')
