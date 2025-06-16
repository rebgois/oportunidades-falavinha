<template>
    <div class="chart-container">
      <Bar :chart-data="chartData" :chart-options="chartOptions" />
    </div>
  </template>
  
  <script setup>
  import { reactive } from 'vue'
  import { Bar } from 'vue-chartjs'
  
  // Dados mockados inline: contratações mensais de 2024 vs 2025 até junho
  const chartData = reactive({
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
    datasets: [
      {
        label: '2024',
        data: [30, 45, 50, 40, 60, 55],
        backgroundColor: '#F97316',
        borderRadius: 4
      },
      {
        label: '2025',
        data: [25, 50, 45, 65, 70, 80],
        backgroundColor: '#10B981',
        borderRadius: 4
      }
    ]
  })
  
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: 'Contratações Mensais:',
        font: { size: 16, weight: 'bold', family: 'Inter' }
      },
      legend: {
        display: true,
        position: 'top',
        align: 'center'
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: { stepSize: 10 }
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
  