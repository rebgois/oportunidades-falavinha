<template>
  <v-card class="p-6 d-flex flex-wrap gap-6 justify-center" elevation="2">
    <!-- Donut -->
    <div class="graph-box">
      <h3 class="text-subtitle-1 font-weight-bold mb-2">Distribuição por Tipo de Pagamento</h3>
      <Pie :chart-data="donutData" :chart-options="donutOptions" />
    </div>

    <!-- Barras -->
    <div class="graph-box">
      <h3 class="text-subtitle-1 font-weight-bold mb-2">Estimativa de Pagamento</h3>
      <Bar :chart-data="barData" :chart-options="barOptions" />
    </div>

    <!-- Linha preenchida -->
    <div class="graph-box">
      <h3 class="text-subtitle-1 font-weight-bold mb-2">Evolução das Vendas</h3>
      <Line :chart-data="lineData" :chart-options="lineOptions" />
    </div>
  </v-card>
</template>

<script setup>
import { Pie, Bar, Line } from 'vue-chartjs';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  ChartDataLabels
);

// --- DONUT ---
const donutData = {
  labels: ['Recorrente', 'PIX', 'Boleto', 'Cartão de Crédito', 'Transferência'],
  datasets: [
    {
      data: [25, 45, 25, 25, 5],
      backgroundColor: ['#93c5fd', '#0754d3', '#f08718', '#9ca3af', '#0f2e4c'],
      borderWidth: 4,
      borderColor: '#fff',
    },
  ],
};

const donutOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom',
    },
    datalabels: {
      color: '#fff',
      formatter: (value, context) => {
        const total = context.chart._metasets[0].total;
        return ((value / total) * 100).toFixed(0) + '%';
      },
    },
  },
  cutout: '65%',
};

// --- BARRAS ---
const barData = {
  labels: ['Nov/2024', 'Dez/2024', 'Jan/2025', 'Fev/2025', 'Mar/2025', 'Abr/2025'],
  datasets: [
    {
      label: 'Estimado',
      backgroundColor: '#0754d3',
      data: [3000, 3000, 12000, 9000, 6000, 8000],
    },
    {
      label: 'Recebido',
      backgroundColor: '#f08718',
      data: [2800, 2800, 9000, 7000, 4500, 6500],
    },
  ],
};

const barOptions = {
  responsive: true,
  plugins: {
    legend: { position: 'bottom' },
    datalabels: {
      anchor: 'end',
      align: 'end',
      formatter: Math.round,
      color: '#000',
    },
  },
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

// --- LINHA ---
const lineData = {
  labels: ['01 Mar', '02 Mar', '03 Mar', '04 Mar', '05 Mar', '06 Mar', '07 Mar'],
  datasets: [
    {
      label: 'Ano 2024',
      data: [60, 30, 45, 40, 70, 120, 80],
      borderColor: '#0754d3',
      backgroundColor: 'rgba(7, 84, 211, 0.2)',
      fill: true,
      tension: 0.4,
    },
    {
      label: 'Ano 2025',
      data: [35, 28, 40, 38, 55, 90, 60],
      borderColor: '#f08718',
      backgroundColor: 'rgba(240, 135, 24, 0.2)',
      fill: true,
      tension: 0.4,
    },
  ],
};

const lineOptions = {
  responsive: true,
  plugins: {
    legend: { position: 'bottom' },
  },
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};
</script>

<style scoped>
.graph-box {
  /* width: 400px;
  min-width: 300px;
  height: 320px; */
  background-color: #fff;
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}
</style>
