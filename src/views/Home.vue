<template>
    <Layout>
      <!-- Hero Banner -->
      <v-card class="rounded-lg mb-8" elevation="2">
        <v-img src="https://source.unsplash.com/collection/190727/1200x400" height="300px">
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-col cols="12" class="text-center">
              <h2 class="white--text text-h4 font-weight-bold">Encontre seu próximo passo para a evolução</h2>
              <v-btn color="primary" large class="mt-4">Ver Vagas</v-btn>
            </v-col>
          </v-row>
        </v-img>
      </v-card>
      <!-- Search & Filters -->
      <v-text-field v-model="search" prepend-inner-icon="mdi-magnify" label="Search for jobs" clearable outlined class="mb-4"/>
      <v-chip-group v-model="selectedFilters" multiple class="mb-6">
        <v-chip color="primary" variant="tonal">Level</v-chip>
        <v-chip color="primary" variant="tonal">City</v-chip>
        <v-chip color="primary" variant="tonal">Specialization</v-chip>
        <v-chip color="primary" variant="tonal">Remote</v-chip>
      </v-chip-group>
      <!-- Job Cards Grid -->
      <v-row dense>
        <v-col v-for="job in pagedJobs" :key="job.id" cols="12" sm="6" md="4" class="d-flex">
          <v-card class="flex-grow-1" elevation="2">
            <v-card-title class="font-weight-bold">{{ job.title }}</v-card-title>
            <v-card-subtitle>{{ job.company }} • {{ job.location }}</v-card-subtitle>
            <v-divider class="my-2" />
            <v-card-text>
              <div><strong>Nível:</strong> {{ job.level }}</div>
              <div><strong>Salário:</strong> {{ job.salary }}</div>
            </v-card-text>
            <v-card-actions>
              <v-spacer />
              <v-btn text color="primary">Ver Detalhes</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <!-- Pagination -->
      <v-row justify="center" class="mt-6">
        <v-pagination v-model="page" :length="pageCount" circle color="primary"/>
      </v-row>
    </Layout>
  </template>
  
  <script setup lang="js">
  import { ref, computed } from 'vue'
  import Layout from '@/components/Layout.vue'
  
  const search = ref('')
  const selectedFilters = ref([])
  const page = ref(1)
  const perPage = 6
  const jobs = ref([
    { id: 1, title: 'Frontend Developer', company: 'Falavinha', location: 'São Paulo', level: 'Pleno', salary: 'R$ 6.000' },
    { id: 2, title: 'Vue.js Engineer', company: 'TechCorp', location: 'Rio de Janeiro', level: 'Sênior', salary: 'R$ 8.500' }
  ])
  const filteredJobs = computed(() => {
    let list = jobs.value
    if (search.value) {
      const term = search.value.toLowerCase()
      list = list.filter(j => j.title.toLowerCase().includes(term) || j.company.toLowerCase().includes(term))
    }
    return list
  })
  const pageCount = computed(() => Math.ceil(filteredJobs.value.length / perPage))
  const pagedJobs = computed(() => {
    const start = (page.value - 1) * perPage
    return filteredJobs.value.slice(start, start + perPage)
  })
  </script>
  