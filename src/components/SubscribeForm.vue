<template>
    <v-card class="mx-auto my-8 pa-6 bg-BgPadrao border-sm border-BorderCardGeral fill-height d-flex flex-column" max-width="50vw">
      <v-card-title class="text-h6 font-weight-bold text-PrimaryFalavinha">Candidatar-se</v-card-title>
  
      <v-form ref="formRef" v-model="valid" lazy-validation>
        <v-row dense>
          <!-- Nome completo -->
          <v-col cols="12" sm="6">
            <div class="input-label text-PrimaryFalavinha">Nome completo *</div>
            <v-text-field
              v-model="form.name"
              :rules="[rules.required]"
              placeholder="Seu nome completo"
              variant="outlined"
              density="compact"
            />
          </v-col>
  
          <!-- E-mail -->
          <v-col cols="12" sm="6">
            <div class="input-label text-PrimaryFalavinha">E-mail *</div>
            <v-text-field
              v-model="form.email"
              :rules="[rules.required, rules.email]"
              placeholder="Seu melhor email"
              variant="outlined"
              density="compact"
            />
          </v-col>
  
          <!-- Celular com DDD -->
          <v-col cols="12" sm="6">
            <div class="input-label text-PrimaryFalavinha">Celular com DDD *</div>
            <v-text-field
              v-model="form.phone"
              :rules="[rules.required, rules.phone]"
              placeholder="41 99999-9999"
              variant="outlined"
              density="compact"
            >
            </v-text-field>
          </v-col>
  
          <!-- LinkedIn -->
          <v-col cols="12" sm="6">
            <div class="input-label text-PrimaryFalavinha">LinkedIn *</div>
            <v-text-field
              v-model="form.linkedin"
              :rules="[rules.required, rules.linkedin]"
              placeholder="https://linkedin.com/in/seu-perfil"
              variant="outlined"
              density="compact"
              hide-details
            />
            <div class="ml-2 text-caption">
              <a href="https://www.linkedin.com/in/" target="_blank" rel="noopener">
                Obtenha o link do seu perfil do LinkedIn
              </a>
            </div>
          </v-col>
  
  
          <!-- Cidade -->
          <v-col cols="12" sm="6">
            <div class="input-label text-PrimaryFalavinha">Cidade *</div>
            <v-text-field
              v-model="form.city"
              :rules="[rules.required]"
              placeholder="Informe sua cidade"
              variant="outlined"
              density="compact"
            />
          </v-col>
                    <!-- Remuneração esperada -->
                    <v-col cols="12" sm="6">
            <div class="input-label text-PrimaryFalavinha">Remuneração esperada como CLT *</div>
            <v-text-field
              v-model="form.salaryExpectation"
              :rules="[rules.required]"
              placeholder="R$ 0,00"
              variant="outlined"
              density="compact"
              
            />
          </v-col>
  
          <!-- Currículo -->
          <v-col cols="12">
            <div class="input-label text-PrimaryFalavinha">Currículo *</div>
            <v-file-input
              v-model="form.cv"
              :rules="[rules.required]"
              accept=".pdf"
              show-size
              label="Anexar currículo"
              variant="outlined"
              density="compact"
              hide-details
            >
              <template #selection="{ text }">
                <v-btn color="primary" variant="outlined" large>
                  <v-icon left>mdi-upload</v-icon>
                  {{ text || 'Anexar currículo' }}
                </v-btn>
              </template>
            </v-file-input>
          </v-col>
  

        </v-row>
  
        <!-- Política de Privacidade -->
        <div class="text-caption text-center mt-4">
          Ao fornecer seus dados pessoais, você concorda com o que está descrito nesta
          <a class="text-PrimaryFalavinha" href="/politica-de-privacidade" target="_blank">Política de Privacidade</a>
        </div>
  
        <!-- Ações -->
        <v-row justify="end" class="mt-6 justify-sm-space-around">
          <v-btn class="text-none rounded-xl" text @click="resetForm">Limpar</v-btn>
          <v-btn
          class="text-none"
            :disabled="!valid"
            color="PrimaryFalavinha"
            rounded
            large
            @click="submit"
          >
            Candidatar-se para a vaga
          </v-btn>
        </v-row>
      </v-form>
    </v-card>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const formRef = ref(null)
  const valid = ref(false)
  const form = ref({
    name: '', email: '', countryCode: '+55', phone: '',
    linkedin: '', country: '', city: '', cv: null, salaryExpectation: ''
  })
  
  const countryCodes = [
    { text: '🇧🇷 +55', value: '+55' },
    { text: '🇺🇸 +1', value: '+1' }
  ]
  const countries = ['Brasil', 'Argentina', 'Chile', 'Colômbia', 'Estados Unidos']
  
  const rules = {
    required: v => !!v || 'Campo obrigatório.',
    email: v => /.+@.+\..+/.test(v) || 'E-mail inválido.',
    phone: v => /^[0-9]{8,11}$/.test(v) || 'Telefone inválido.',
    linkedin: v => /^https?:\/\/(www\.)?linkedin\.com\/.+/.test(v) || 'Link inválido.'
  }
  
  function resetForm() {
    form.value = { name: '', email: '', countryCode: '+55', phone: '',
      linkedin: '', country: '', city: '', cv: null, salaryExpectation: '' }
    formRef.value.resetValidation()
  }
  
  function submit() {
    if (!formRef.value.validate()) return
    alert('Candidatura enviada com sucesso!')
    resetForm()
  }
  </script>
  
  <style scoped>
  .v-card { border-radius: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); }
  .input-label { font-weight: 500; margin-bottom: 4px; }
  </style>
  