<template>
  <v-card
    class="bg-BgPadrao rounded-lg d-flex flex-row justify-center items-center gap-2"
    elevation="2"
  >
    <Line
      class="chart-container pa-2"
      :chart-data="growthData"
      :chart-options="options"
    />

    <Bar
      class="chart-container pa-2"
      :chart-data="projectsData"
      :chart-options="options"
    />

    <Pie
      class="chart-container pa-2"
      :chart-data="impactData"
      :chart-options="options"
    />
  </v-card>
</template>

<script setup>
import { Line, Bar, Pie } from "vue-chartjs";
import { Chart as ChartJS, registerables } from "chart.js";

ChartJS.register(...registerables);

const options = {
  responsive: true,
  maintainAspectRatio: false,
};

const growthData = {
  labels: ["2019", "2020", "2021", "2022", "2023"],
  datasets: [
    {
      label: "Crescimento de Funcionários (%)",
      backgroundColor: "#145d61",
      borderColor: "#145d61",
      fill: false,
      data: [5, 10, 20, 25, 30],
    },
  ],
};

const projectsData = {
  labels: ["2020", "2021", "2022", "2023"],
  datasets: [
    {
      label: "Projetos Entregues",
      backgroundColor: "#145d61",
      data: [2, 5, 8, 12],
    },
  ],
};

const impactData = {
  labels: ["Baixo", "Médio", "Alto"],
  datasets: [
    {
      label: "Impacto",
      backgroundColor: ["#145d61", "#fdd835", "#e65100"],
      data: [20, 40, 40],
    },
  ],
};
</script>

<style scoped>
.chart-container {
  max-width: 33vw;
  max-height: 33vh;
}
</style>
