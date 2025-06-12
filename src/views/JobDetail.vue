<template>
    <Layout>
      <v-card class="mx-auto my-8 pa-6" max-width="700">
        <v-card-title class="text-h5 font-weight-bold">
          {{ vaga.cargo }} • {{ vaga.nivel }}
        </v-card-title>
        <v-card-subtitle class="mb-4">
          Falavinha Next • {{ vaga.localizacao }} • R$ {{ vaga.salario.toLocaleString('pt-BR') }}
        </v-card-subtitle>
  
        <v-divider class="mb-4"/>
  
        <section class="mb-6">
          <h3 class="text-subtitle-1 font-weight-bold mb-2">Descrição</h3>
          <p>{{ vaga.descricao }}</p>
        </section>
  
        <section class="mb-6">
          <h3 class="text-subtitle-1 font-weight-bold mb-2">Requisitos</h3>
          <ul>
            <li v-for="(r, i) in vaga.requisitos" :key="i">{{ r }}</li>
          </ul>
        </section>
  
        <section class="mb-6">
          <h3 class="text-subtitle-1 font-weight-bold mb-2">Atribuições</h3>
          <ul>
            <li v-for="(a, i) in vaga.atribuicoes" :key="i">{{ a }}</li>
          </ul>
        </section>

        <section class="mb-6">
          <h3 class="text-subtitle-1 font-weight-bold mb-2">Painéis</h3>
          <JobDashboards />
        </section>
  
        <v-divider class="mb-6"/>
  
        <h3 class="text-h6 font-weight-bold mb-4">Candidatar-se</h3>
        <v-form @submit.prevent="enviarCandidatura" ref="form">
          <v-text-field
            v-model="form.nome"
            label="Nome completo"
            required
          />
          <v-text-field
            v-model="form.email"
            label="E-mail"
            type="email"
            required
          />
          <v-file-input
            v-model="form.curriculo"
            label="Upload de currículo (PDF)"
            accept=".pdf"
            required
          />
          <v-btn type="submit" color="PrimaryFalavinha" class="mt-4">
            Enviar candidatura
          </v-btn>
        </v-form>
      </v-card>
    </Layout>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  import { useVagasStore } from '@/stores/vagasStore'
import Layout from '@/components/Layout.vue'
import JobDashboards from '@/components/JobDashboards.vue'
  
  const route = useRoute()
  const router = useRouter()
  const vagasStore = useVagasStore()
  
  // carrega vagas se ainda não tiver
  if (!vagasStore.lista.length) vagasStore.carregarVagas()
  
  const vaga = computed(() =>
    vagasStore.lista.find(v => v.id === Number(route.params.id))
  )
  
  // formulário
  const form = ref({ nome: '', email: '', curriculo: null })
  const formRef = ref(null)
  
  function enviarCandidatura() {
    if (!formRef.value.validate()) return
    // aqui você mandaria pro backend ou serviço de e-mail
    console.log('Dados enviados:', form.value)
    alert('Candidatura enviada com sucesso!')
    router.push('/') // volta pra lista
  }
  </script>
  