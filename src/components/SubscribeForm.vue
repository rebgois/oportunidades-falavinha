<template>
  <v-card
    class="mx-auto my-8 pa-6 bg-BgPadrao border-sm border-BorderCardGeral fill-height d-flex flex-column"
  >
    <v-card-title class="text-h6 font-weight-bold text-PrimaryFalavinha"
      >Candidatar-se para a vaga</v-card-title
    >
    <!-- Formulário apontando para Formspree -->
    <form
      action="https://formspree.io/f/mpwrrvkq"
      method="POST"
      class="d-flex flex-column"
    >
      <div class="input-label">Nome completo *</div>
      <v-text-field
        name="name"
        placeholder="Seu nome completo"
        variant="outlined"
        density="compact"
        rounded
        required
      />

      <div class="input-label">E-mail *</div>
      <v-text-field
        type="email"
        name="email"
        placeholder="Seu melhor e-mail"
        variant="outlined"
        density="compact"
        required
        rounded
      />

      <div class="input-label">Celular com DDD *</div>
      <v-text-field
        name="phone"
        placeholder="(41) 99999-9999"
        variant="outlined"
        density="compact"
        rounded
        required
      />

      <div class="input-label">LinkedIn *</div>
      <v-text-field
        name="linkedin"
        placeholder="https://linkedin.com/in/seu-perfil"
        variant="outlined"
        density="compact"
        required
        rounded
        hide-details
      />
      <div class="ma-1 pb-2 text-caption">
        <a href="https://www.linkedin.com/in/" target="_blank" rel="noopener">
          Obtenha o link do seu perfil do LinkedIn
        </a>
      </div>

      <!-- Remuneração esperada -->
      <div class="input-label">Remuneração esperada como CLT *</div>
      <v-text-field
        name="salaryExpectation"
        placeholder="0,00"
        prefix="R$"
        variant="outlined"
        density="compact"
        rounded
        required
      />

      <!-- Campos ocultos: idioma e ID da vaga -->
      <input type="hidden" name="_language" value="pt" />
      <input type="hidden" name="jobId" :value="jobId" />

      <v-btn
        type="submit"
        color="PrimaryFalavinha"
        class="mt-6 rounded-xl"
        large
      >
        Enviar candidatura
      </v-btn>
    </form>
  </v-card>
</template>

<script setup>
import { useRoute } from "vue-router";

// Extrai o ID da vaga diretamente da URL
const route = useRoute();
const jobId = route.params.id;
</script>

<style scoped>
.input-label {
  font-weight: 500;
  margin-bottom: 4px;
}
</style>
