import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import Main from './components/main.vue'
import NavEle from './components/navEle.vue'
import Em from './components/em.vue'
export default new Router({
    routes: [
        {
            path: "/",
            name: "main",
            component: Main,
            children: [
                {
                    path: 'navEle',
                    component: NavEle,

                }
            ]
        },
        {
            path: "/",
            name: "main",
            component: Main,
            children: [
                {
                    path: 'em',
                    component: Em,
                    props: {
                        h:'233',
                        l:'1'
                    }
                }
            ]
        }
    ]
});