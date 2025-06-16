<template>
    <Layout>
      <v-container fluid class="py-10 inter-normal">
        <!-- Hero Section with slide-down animation -->
        <v-slide-y-transition mode="in-out" appear>
          <v-row justify="center" class="mb-12">
            <v-col cols="12" md="8" class="text-center">
              <h1 class="display-1 font-weight-bold">Por que nos escolher</h1>
              <p class="subtitle-1 mt-2">
                Ambiente colaborativo • Crescimento rápido de carreira • Diversidade e inovação
              </p>
              <v-btn color="PrimaryFalavinha" class="mt-4 text-none" to="/">
                Ver vagas abertas
              </v-btn>
            </v-col>
          </v-row>
        </v-slide-y-transition>
  
        <!-- KPIs with fade-in and hover scale -->
        <v-fade-transition mode="in-out" appear>
          <v-row class="my-12" justify="center" dense>
            <v-col cols="6" sm="3" v-for="(item, i) in kpis" :key="i">
              <v-card class="pa-6 text-center kpi-card hover-scale">
                <v-icon size="36">{{ item.icon }}</v-icon>
                <div class="headline font-weight-bold mt-2">{{ item.value }}</div>
                <div class="body-2 text-secondary">{{ item.label }}</div>
              </v-card>
            </v-col>
          </v-row>
        </v-fade-transition>
  
        <!-- Glassdoor Metrics slide-up -->
        <v-fade-transition mode="in-out" appear>
          <v-row class="my-12" justify="center" dense>
            <v-col cols="12">
              <div class="subtitle-2 inter-normal text-secondary text-center mb-4">
                Dados de avaliação extraídos do Glassdoor
              </div>
            </v-col>
            <!-- Glassdoor detailed rating -->
            <v-col cols="12">
              <v-card flat class="mb-6 pa-6 glassdoor-summary text-center">
                <h2 class="subtitle-1 font-weight-bold mb-2">Avaliações da empresa Falavinha Next</h2>
                <div class="d-flex align-center justify-center justify-sm-space-around">
                  <img src="@/assets/glassdoor-logo.png" alt="Logo Glassdoor" width="240" height="120">
                  
                  <div class="d-flex flex-row justify-center align-center">
                    <span class="display-1 font-weight-bold" style="color:#0CA951;">4,3</span>
                    <v-rating
                    :model-value="4.3"
                    length="5"
                    half-increments
                    readonly
                    dense
                    size="24"
                    color="#0CA951"
                    background-color="#E0E0E0"
                    class="ml-2"
                  />
                  </div>
                </div>
                <div class="body-2 text-secondary">69% recomendariam a amigos</div>
                <div class="body-2 text-secondary">(Total de 22 avaliações)</div>
              </v-card>
            </v-col>
            <v-col cols="12" sm="6" md="3" v-for="(m, i) in glassdoorMetrics" :key="i">
              <v-card class="pa-6 text-center bg-glassdoor hover-scale">
                <v-icon size="36">{{ m.icon }}</v-icon>
                <div class="headline font-weight-bold mt-2">{{ m.value }}</div>
                <div class="body-2 text-secondary">{{ m.label }}</div>
              </v-card>
            </v-col>
          </v-row>
        </v-fade-transition>
  
        <!-- Culture & Values slide-left -->
        <v-slide-x-transition mode="in-out" appear>
          <v-row class="my-12">
            <v-col cols="12" md="6">
              <h2 class="subtitle-1 font-weight-bold mb-4">Nossa Cultura e Valores</h2>
              <p>
                Na Falavinha Next, nossa missão é empoderar cada colaborador com autonomia,
                comunicação aberta e foco constante na inovação.
              </p>
              <v-list dense class="bg-transparent">
                <v-list-item v-for="(val, i) in values" :key="i">
                  <v-list-item-icon class="pa-2">
                    <v-icon color="PrimaryFalavinha">mdi-check-circle</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>{{ val }}</v-list-item-content>
                </v-list-item>
              </v-list>
            </v-col>
            <v-col cols="12" md="6">
              <v-img
                src="@/assets/timeFalavinha.jpeg"
                aspect-ratio="1.7"
                class="rounded-xl"
              />
            </v-col>
          </v-row>
        </v-slide-x-transition>
  
        <!-- Benefits slide-right -->
        <v-slide-x-reverse-transition mode="in-out" appear>
          <v-row class="my-12 justify-sm-space-around" dense>
            <v-col cols="12" class="text-center mb-6">
              <h2 class="subtitle-1 font-weight-bold">Benefícios e Vantagens</h2>
            </v-col>
            <v-col cols="6" sm="4" md="2" v-for="(b, i) in benefits" :key="i">
              <v-card class="pa-4 text-center hover-scale">
                <v-icon size="32">{{ b.icon }}</v-icon>
                <div class="body-2 font-weight-bold mt-2">{{ b.label }}</div>
              </v-card>
            </v-col>
          </v-row>
        </v-slide-x-reverse-transition>
  
        <!-- Testimonials fade-in carousel auto-cycle -->
        <v-fade-transition mode="in-out" appear>
          <v-row class="my-12">
            <v-col cols="12">
              <h2 class="subtitle-1 font-weight-bold mb-6 text-center">Depoimentos</h2>
              <v-carousel hide-delimiter-background height="200" cycle interval="5000">
                <v-carousel-item v-for="(t, i) in testimonials" :key="i">
                  <blockquote class="mx-auto">"{{ t.quote }}"</blockquote>
                  <div class="mt-2 font-weight-bold text-center">
                    — {{ t.name }}, {{ t.role }}
                  </div>
                </v-carousel-item>
              </v-carousel>
            </v-col>
          </v-row>
        </v-fade-transition>
  
        <!-- Final CTA scale-up -->
        <v-scale-transition mode="in-out" appear>
          <v-row justify="center" class="my-12">
            <v-col cols="12" md="6" class="text-center">
              <v-card class="pa-10 rounded-xl hover-scale">
                <h2 class="title font-weight-bold">Pronto para se juntar à Falavinha Next?</h2>
                <v-btn color="PrimaryFalavinha" large class="mt-4 text-none" to="/">
                  Ver vagas abertas
                </v-btn>
              </v-card>
            </v-col>
          </v-row>
        </v-scale-transition>
      </v-container>
    </Layout>
  </template>
  
  <script setup>
  import Layout from '@/components/Layout.vue'
  import { ref } from 'vue'
  
  const kpis = ref([
    { icon: 'mdi-calendar', value: '10+ anos', label: 'Experiência' },
    { icon: 'mdi-account-group', value: '200+', label: 'Colaboradores' },
    { icon: 'mdi-star', value: '85%', label: 'Taxa de Retenção' },
    { icon: 'mdi-trophy', value: 'Great Place to Work', label: 'Reconhecimento' }
  ])
  
  const values = [
    'Autonomia',
    'Comunicação Aberta',
    'Foco no Cliente',
    'Inovação Contínua'
  ]
  
  const benefits = ref([
    { icon: 'mdi-heart-pulse', label: 'Saúde e Odonto' },
    { icon: 'mdi-home-city', label: 'Flexibilidade' },
    { icon: 'mdi-silverware-fork-knife', label: 'Vale Refeição' },
    { icon: 'mdi-school', label: 'Capacitação' },
    { icon: 'mdi-video', label: 'Eventos Internos' }
  ])
  
  const testimonials = ref([
    {
      quote: 'Avancei de estagiário a pleno em apenas 6 meses.',
      name: 'Ana',
      role: 'Front-End Developer'
    },
    {
      quote: 'A cultura aqui impulsiona meu crescimento diário.',
      name: 'Carlos',
      role: 'Analista de Dados'
    }
  ])
  
  const glassdoorMetrics = ref([
    { icon: 'mdi-star-circle', label: 'Avaliação geral', value: '4.3 / 5' },
    { icon: 'mdi-account-check', label: 'Recomendam a empresa', value: '92%' },
    { icon: 'mdi-thumb-up', label: 'Aprovam o CEO', value: '85%' },
    { icon: 'mdi-comment-multiple', label: 'Total de avaliações', value: '87' }
  ])
  </script>
  
  <style scoped>
  blockquote {
    font-style: normal;
    line-height: 1.4;
    margin: 0 auto;
    max-width: 600px;
  }
  
  .kpi-card,
  .bg-glassdoor,
  .hover-scale {
    transition: transform 0.3s ease;
  }
  
  .hover-scale:hover {
    transform: scale(1.05);
  }
  </style>
  