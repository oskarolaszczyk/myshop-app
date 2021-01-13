import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '../views/MainPage'
//import HelloWorld from '../components/HelloWorld'
import Cart from '../views/Cart'

//import { component } from 'vue/types/umd'

Vue.use(Router)

export default new Router({
    mode: "hash",
    routes: [
        {
        path:'/',
        name: 'MainPage',
        component: MainPage
        },
        {
            path:'/cart',
            name: 'Cart',
            component: Cart
        },
    ]

})
