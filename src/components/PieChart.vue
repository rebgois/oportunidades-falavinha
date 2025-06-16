<template>
    <div class="chart-container">
      <Doughnut :chart-data="chartData" :chart-options="chartOptions" />
    </div>
  </template>
  
  <script setup>
  import { reactive } from 'vue'
  import { Doughnut } from 'vue-chartjs'
  import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
  
  // Registrar componentes do Chart.js para doughnut
  ChartJS.register(ArcElement, Tooltip, Legend)
  
  // Dados mockados inline: opinião dos colaboradores (%)
  const chartData = reactive({
    labels: ['Ótimo', 'Bom', 'Regular', 'Ruim', 'Não Recomendo'],
    datasets: [
      {
        data: [45, 30, 15, 3, 1],
        backgroundColor: ['#059669', '#10B981', '#FBBF24', '#F97316', '#EF4444'],
        borderWidth: 0
      }
    ]
  })
  
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '60%',
    plugins: {
      title: {
        display: true,
        text: 'Opinião dos Colaboradores',
        font: { size: 16, weight: 'bold', family: 'Inter' }
      },
      legend: {
        display: true,
        position: 'top',
        align: 'center',
        labels: { boxWidth: 12, boxHeight: 12, padding: 8 }
      },
      tooltip: {
        callbacks: {
          label(ctx) {
            return `${ctx.label}: ${ctx.raw}%`
          }
        }
      }
    }
  }
  </script>
  
  <style scoped>
  .chart-container {
    position: relative;
    width: 100%;
    height: 100%;
  }
  </style>
  