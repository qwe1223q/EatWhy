import Vue from 'vue'
import VueRouter from 'vue-router'
import toCity from '@/views/toCity'
import changecity from '@/views/changecity'


Vue.use(VueRouter)

const routes = [
  {path: '', redirect: '/changecity'},
  {path:'/changecity',component:changecity},
  {path:'/toCity/:id',name:'toCity',component:toCity}
]

const router = new VueRouter({
  routes
})

export default router
