<template>
  <Layout>
    <v-card class="hero-card rounded-xl mb-8 pa-4" elevation="2">
      <div class="hero-images-container">
        <v-img
          src="@/assets/LogotipoFalavinhaNext.png"
          class="hero-img hero-one"
          cover
        />
        <v-img
          src="@/assets/contabilidade-falavinha.jpg"
          class="hero-img hero-two"
          cover
        />
        <v-img
          src="@/assets/timeFalavinha.jpeg"
          class="hero-img hero-three"
          cover
        />
      </div>
    </v-card>
    <v-row class="mb-6" justify="center">
      <v-col cols="12" md="12">
        <v-text-field
          v-model="search"
          placeholder="Filtrar vagas por palavra-chave"
          prepend-inner-icon="mdi-magnify"
          clearable
          variant="outlined"
          density="comfortable"
          class="rounded-xl w-100 text-PrimaryFalavinha"
        />
      </v-col>
    </v-row>
    <Transition name="fade" mode="out-in" appear>
      <div :key="page">
        <v-row class="gap-6">
          <v-col
            v-for="job in pagedJobs"
            :key="job.id"
            cols="12"
            sm="6"
            md="4"
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
                    variant="tonal"
                    density="compact"
                  >
                    {{ job.nivel }}
                  </v-chip>
                </div>
                <div>
                  <strong>Salário:</strong>
                  R$ {{ job.salario.toLocaleString("pt-BR") }}
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

    <v-row justify="center" class="mt-6 mb-5">
      <v-pagination v-model="page" :length="pageCount" rounded color="PrimaryFalavinha" />
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
  if (normalized.includes('pleno')) return 'purple'
  if (normalized.includes('sênior') || normalized.includes('senior')) return 'orange'
  return 'grey'
}
</script>

<style scoped>
.hero-card {
  position: relative;
  overflow: hidden;
}

.hero-images-container {
  position: relative;
  width: 100%;
  height: 50vh;
}

/* estilos comuns a todas as imagens */
.hero-img {
  position: absolute;
  border-radius: 16px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

/* primeira imagem, mais à esquerda */
.hero-one {
  top: 0;
  left: 0;
  width: 45%;
  height: 100%;
  z-index: 3;
}

/* segunda, levemente sobreposta à primeira */
.hero-two {
  top: 8%;
  left: 30%;
  width: 45%;
  height: 84%;
  z-index: 2;
}

/* terceira, sobreposta às outras, um pouco menor */
.hero-three {
  top: 16%;
  left: 60%;
  width: 35%;
  height: 68%;
  z-index: 1;
}

/* efeito hover para destacar */
.hero-img:hover {
  transform: translateY(-8px) scale(1.05);
  z-index: 4 !important;
}

/* em telas pequenas, empilha verticalmente */
@media (max-width: 960px) {
  .hero-images-container {
    display: flex;
    flex-direction: column;
    height: auto;
    gap: 16px;
  }
  .hero-img {
    position: relative;
    width: 100% !important;
    height: auto !important;
    transform: none !important;
  }
}
</style>
