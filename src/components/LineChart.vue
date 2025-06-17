<template>
  <div class="chart-container">
    <Line :chart-data="chartData" :chart-options="chartOptions" />
  </div>
</template>

<script setup>
import { reactive } from "vue";
import { Line } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale
);

const chartData = reactive({
  labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"],
  datasets: [
    {
      label: "2024",
      data: [7, 8, 6, 10, 12, 9],
      borderColor: "#1D4ED8",
      backgroundColor: "rgba(29, 78, 216, 0.3)",
      fill: true,
      tension: 0.4,
    },
    {
      label: "2025",
      data: [4, 10, 8, 12, 15, 11],
      borderColor: "#F97316",
      backgroundColor: "rgba(249, 115, 22, 0.3)",
      fill: true,
      tension: 0.4,
    },
  ],
});

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    title: {
      display: true,
      text: "Promoções Mensais:",
      font: { size: 16, weight: "bold", family: "Inter" },
    },
    legend: {
      display: true,
      position: "top",
      align: "center",
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      ticks: { stepSize: 2 },
    },
  },
};
</script>

<style scoped>
.chart-container {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>
