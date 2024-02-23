import { createRouter, createWebHistory } from 'vue-router'
import AuthVue from '@/views/Auth.vue'
import FormularioPrinc from '../components/FormularioPrinc.vue'
import FormularioRegVue from '@/components/FormularioReg.vue'
import FormularioLogVue from '@/components/FormularioLog.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'auth',
      component: AuthVue
    },
    {
      path: '/home',
      name: 'home',
      component: FormularioPrinc,
      meta: { requiresAuth: true }
    },
    {
      path: '/registro',
      name: 'registro',
      component: FormularioRegVue
    },
    {
      path: '/inicio',
      name: 'inicio',
      component: FormularioLogVue
    }
  ]
  
})

export default router
