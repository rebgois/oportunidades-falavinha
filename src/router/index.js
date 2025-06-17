import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";

import JobDetailView from "@/views/JobDetailView.vue";
import WhyChooseUsView from "@/views/WhyChooseUsView.vue";

import TalentPoolView from "@/views/TalentPoolView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/vagas/:id",
    name: "JobDetail",
    component: JobDetailView,
    props: true,
  },
  {
    path: "/por-que-nos-escolher",
    name: "WhyChooseUs",
    component: WhyChooseUsView,
  },
  {
    path: "/banco-de-talentos",
    name: "TalentPool",
    component: TalentPoolView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
