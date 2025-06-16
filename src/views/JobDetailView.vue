
<!--  JobDetail.vue -->
<template>
  <Layout>
    <v-card class="rounded-xl mx-auto my-8 pa-6">
      <v-card-title class="text-h5 font-weight-bold">
        {{ vaga.cargo }} • {{ vaga.nivel }}
      </v-card-title>
      <v-card-subtitle class="mb-4">
        Falavinha Next • {{ vaga.localizacao }} • R$
        {{ vaga.salario.toLocaleString("pt-BR") }}
      </v-card-subtitle>

      <v-divider class="mb-4" />

      <v-row class="px-6">
        <v-col cols="12" md="6">
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
        </v-col>
        <v-col
          cols="12"
          md="6"
          class="d-flex flex-column justify-space-between"
        >
          <v-form @submit.prevent="enviarCandidatura" ref="formRef">
            <h3 class="text-h6 font-weight-bold mb-4">Candidatar-se</h3>
            <v-text-field
              v-model="form.nome"
              placeholder="Nome completo"
              variant="outlined"
              density="compact"
              required
            />
            <v-text-field
              v-model="form.email"
              placeholder="Seu melhor E-mail"
              type="email"
              required
              variant="outlined"
              density="compact"
            />
            <v-file-input
              v-model="form.curriculo"
              accept=".pdf"
              prepend-icon="mdi-cloud-upload-outline"
              label="Anexar Currículo (PDF)"
              placeholder="Nenhum arquivo selecionado"
              variant="outlined"
              density="compact"
              hide-details
            />

            <v-btn
              type="submit"
              color="PrimaryFalavinha"
              class="mt-4 rounded-xl"
            >
              Enviar candidatura
            </v-btn>
          </v-form>
          <div class="text-center my-4">
            <v-icon
              class="bounce"
              color="PrimaryFalavinha"
              size="36"
              icon="mdi-chevron-down"
            />
          </div>
        </v-col>
        <v-divider class="mb-6" />
      </v-row>
      <v-card class="overflow-hidden">
  <v-row align="stretch">
    <!-- Bar -->
    <v-col cols="12" md="4" class="d-flex">
      <v-card class="pa-4 rounded-xl bg-CardBg border-sm border-BorderCardGeral fill-height d-flex flex-column">
        <div style="position:relative; flex:1">
          <BarChart />
        </div>
      </v-card>
    </v-col>

    <!-- Line -->
    <v-col cols="12" md="4" class="d-flex">
      <v-card class="pa-4 rounded-xl bg-CardBg border-sm border-BorderCardGeral fill-height d-flex flex-column">
        <div style="position:relative; flex:1">
          <LineChart />
        </div>
      </v-card>
    </v-col>

    <!-- Pie -->
    <v-col cols="12" md="4" class="d-flex">
      <v-card class="pa-4 rounded-xl bg-CardBg border-sm border-BorderCardGeral fill-height d-flex flex-column">
        <div style="position:relative; flex:1">
          <PieChart />
        </div>
      </v-card>
    </v-col>
  </v-row>
</v-card>

    </v-card>
  </Layout>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useVagasStore } from "@/stores/vagasStore";
import Layout from "@/components/Layout.vue";
import JobDashboards from "@/components/JobDashboards.vue";
import BarChart from "@/components/BarChart.vue";
import LineChart from "@/components/LineChart.vue";
import PieChart from "@/components/PieChart.vue";

const route = useRoute();
const router = useRouter();
const vagasStore = useVagasStore();

// carrega vagas se ainda não tiver
if (!vagasStore.lista.length) vagasStore.carregarVagas();

const vaga = computed(() =>
  vagasStore.lista.find((v) => v.id === Number(route.params.id))
);

// formulário
const form = ref({ nome: "", email: "", curriculo: null });
const formRef = ref(null);

function enviarCandidatura() {
  if (!formRef.value.validate()) return;
  // aqui você mandaria pro backend ou serviço de e-mail
  console.log("Dados enviados:", form.value);
  alert("Candidatura enviada com sucesso!");
  router.push("/"); // volta pra lista
}
</script>

<style scoped lang="css">


.linha-dashboards {
  max-height: 20vh;
  display: flex;
  flex-direction: row;
}

.bounce {
  animation: bounce 1.5s infinite;
}

@keyframes bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(8px);
  }
}
</style>
