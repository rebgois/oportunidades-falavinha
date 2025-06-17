<template>
  <Layout>
    <v-container fluid class="py-10 inter-normal">
      <v-slide-y-transition mode="in-out" appear>
        <v-row justify="center" class="mb-12">
          <v-col cols="12" md="8" class="text-center">
            <h1 class="display-1 font-weight-bold text-PrimaryFalavinha">Não encontrou a vaga dos seus sonhos?</h1>
            <p class="subtitle-1 mt-2 text-TextGrey">
              Se inscreva no nosso Banco de Talentos e se acharmos uma vaga que se encaixe bem com sua experiência e habilidades, você poderá receber um convite para a vaga.
            </p>

          </v-col>
        </v-row>
      </v-slide-y-transition>

      <SubscribeForm class="bg-BgView" />
      <v-scale-transition mode="in-out" appear>
        <v-row justify="center" class="my-12">
          <v-col cols="12" md="6" class="text-center">
            <v-card class="pa-10 rounded-xl hover-scale">
              <h2 class="title font-weight-bold text-TextGrey">Pronto para se juntar à Falavinha Next?</h2>
              <v-btn color="PrimaryFalavinha rounded-xl" large class="mt-4 text-none" to="/">
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
import SubscribeForm from '@/components/SubscribeForm.vue'


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
