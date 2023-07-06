import { createApp } from 'vue'
import './common/init.css'
import "./common/style.css"
import App from './App.vue'
import router from "./router"

const Vue = createApp(App)

// element ui plugins
import {ElMessage,ElMessageBox} from "element-plus"
Vue.config.globalProperties.$message = ElMessage 
Vue.config.globalProperties.$confirm = ElMessageBox.confirm

//MdEditor 富文本编辑器
import { MdEditor, MdPreview, MdCatalog } from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';
import 'md-editor-v3/lib/preview.css';
Vue.component("MdEditor", MdEditor)
Vue.component("MdPreview", MdPreview)
Vue.component("MdCatalog", MdCatalog)

//axios
import {get, post} from "./common/axios.ts"
Vue.config.globalProperties.$get = get;
Vue.config.globalProperties.$post = post;


Vue.use(router)
Vue.mount('#app')
