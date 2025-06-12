<template>
  <div>
    <div class="chart-container">
      <Line :data="growthData" :options="options" />
    </div>
    <div class="chart-container mt-6">
      <Bar :data="projectsData" :options="options" />
    </div>
    <div class="chart-container mt-6">
      <Pie :data="impactData" :options="options" />
    </div>
  </div>
</template>

<script setup>
import { Line, Bar, Pie } from 'vue-chartjs'
import { Chart as ChartJS, registerables } from 'chart.js'

ChartJS.register(...registerables)

const options = {
  responsive: true,
  maintainAspectRatio: false
}

const growthData = {
  labels: ['2019', '2020', '2021', '2022', '2023'],
  datasets: [
    {
      label: 'Crescimento de Funcionários (%)',
      backgroundColor: '#145d61',
      borderColor: '#145d61',
      fill: false,
      data: [5, 10, 20, 25, 30]
    }
  ]
}

const projectsData = {
  labels: ['2020', '2021', '2022', '2023'],
  datasets: [
    {
      label: 'Projetos Entregues',
      backgroundColor: '#145d61',
      data: [2, 5, 8, 12]
    }
  ]
}

const impactData = {
  labels: ['Baixo', 'Médio', 'Alto'],
  datasets: [
    {
      label: 'Impacto',
      backgroundColor: ['#145d61', '#fdd835', '#e65100'],
      data: [20, 40, 40]
    }
  ]
}
</script>

<style scoped>
.chart-container {
  width: 100%;
  height: 250px;
}
</style>

