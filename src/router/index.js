import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
// import OpenPositionsView from '@/views/OpenPositionsView.vue'
import JobDetailView from '@/views/JobDetailView.vue'
import WhyChooseUsView from '@/views/WhyChooseUsView.vue'
import ResultsView from '@/views/ResultsView.vue'
import TalentPoolView from '@/views/TalentPoolView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/detalhes-da-vaga/:id',
    name: 'JobDetail',
    component: JobDetailView,
    props: true
  },
  {
    path: '/por-que-nos-escolher',
    name: 'WhyChooseUs',
    component: WhyChooseUsView
  },
  {
    path: '/resultados',
    name: 'Results',
    component: ResultsView
  },
  {
    path: '/banco-de-talentos',
    name: 'TalentPool',
    component: TalentPoolView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
