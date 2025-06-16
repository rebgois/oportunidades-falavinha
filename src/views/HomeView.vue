<template>
  <Layout>
    <!-- … Hero Banner e filtros … -->
    <v-card class="rounded-xl mb-8 w-auto h-auto" elevation="2">
        <!-- <v-img  src="../assets/timeFalavinha.jpeg" width="100%" height="100%">
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-col cols="12" class="text-center">
              <h2 class="white--text text-h4 font-weight-bold">Encontre seu próximo passo para a evolução</h2>
              <v-btn color="PrimaryFalavinha" large class="mt-4 text-none inter-normal">Ver Vagas</v-btn>
            </v-col>
          </v-row>
        </v-img> -->
      </v-card>

      <Transition name="fade" mode="out-in" appear>
      <div :key="page">
        <v-row class="gap-6">
          <v-col
            v-for="job in pagedJobs"
            :key="job.id"
            cols="12" sm="6" md="4"
            class="d-flex"
          >
          <v-card class="flex-grow-1 rounded-xl bg-BgPadrao" elevation="2">
          <v-card-title class="font-weight-bold text-PrimaryFalavinha">
            {{ job.cargo }}
          </v-card-title>
          <v-card-subtitle>
            Falavinha Next • {{ job.localizacao }}
          </v-card-subtitle>
          <v-divider class="my-2" />
          <v-card-text>
            <div>
              <strong>Nível:</strong>
              <v-chip
                :color="getLevelColor(job.nivel)"
                variant="flat"
                density="compact"
              >
                {{ job.nivel }}
              </v-chip>
            </div>
            <div>
              <strong>Salário:</strong>
              R$ {{ job.salario.toLocaleString('pt-BR') }}
            </div>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <RouterLink :to="`/vagas/${job.id}`" class="ml-auto">
              <v-btn
                color="white"
                class="bg-PrimaryFalavinha text-none inter-normal rounded-xl"
              >
                Detalhes
              </v-btn>
            </RouterLink>
          </v-card-actions>
        </v-card>
          </v-col>
        </v-row>
      </div>
    </Transition>

    <v-row justify="center" class="mt-6">
      <v-pagination v-model="page" :length="pageCount" circle color="primary"/>
    </v-row>
  </Layout>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s ease-in-out;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
  
  <script setup lang="js">
  import { ref, computed, onMounted } from 'vue'
  import Layout from '@/components/Layout.vue'
  import { useVagasStore } from '@/stores/vagasStore'
  
  const vagasStore = useVagasStore()
  const search = ref('')
  const selectedFilters = ref([])
  const page = ref(1)
  const perPage = 6
  
  onMounted(() => {
    vagasStore.carregarVagas()
  })
  
  const jobs = computed(() => vagasStore.lista)
  
  const filteredJobs = computed(() => {
    let list = jobs.value
    if (search.value) {
      const term = search.value.toLowerCase()
      list = list.filter(j =>
        j.cargo.toLowerCase().includes(term) ||
        j.localizacao.toLowerCase().includes(term)
      )
    }
    return list
  })
  
  const pageCount = computed(() => Math.ceil(filteredJobs.value.length / perPage))
  
  const pagedJobs = computed(() => {
    const start = (page.value - 1) * perPage
    return filteredJobs.value.slice(start, start + perPage)
  })
  
  const getLevelColor = (level) => {
    const normalized = level.toLowerCase()
    if (normalized.includes('júnior')) return 'blue'
    if (normalized.includes('pleno')) return 'yellow'
    if (normalized.includes('sênior') || normalized.includes('senior')) return 'orange'
    return 'grey'
  }
  </script>

