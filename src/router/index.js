import { createRouter, createWebHashHistory } from 'vue-router'
import DefaultTemplate from '@/layouts/DefaultTemplate'
import HomeView from '@/views/home/HomeView'
import MySupport from '@/views/supports/MySupport'
import modulesAndLesson from '@/views/modules/modulesAndLesson';
import loginComponent from '@/views/auth/auth.vue'
import forgetPassword from '@/views/auth/forgetPassword'

const routes = [
  {
    path: '/campus',
    component: DefaultTemplate,
    children: [
      {
        path: 'modulos',
        name: 'campus.modulos',
        component: modulesAndLesson,
      },
      {
        path: 'minhas-duvidas',
        name: 'campus.my.supports',
        component: MySupport
      },
      {
        path: '',
        name: 'campus.home',
        component: HomeView
      }
    ]
  },
  {
    path: '/',
    name: 'auth',
    component: loginComponent
  },
  {
    path:'/recuperar-senhas',
    name: 'auth.forget',
    component: forgetPassword
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
