import vue from 'vue'
import App from './App.vue'
import router from "./router";
import store from "store"

new vue({
    el:'#app',
    render:h=>h(App),
    router,
    store
})

require('./assets/css/base.css')
