import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import JobDetail from '@/views/JobDetail.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/vagas/:id', name: 'JobDetail', component: JobDetail, props: true }
  ]
  })

