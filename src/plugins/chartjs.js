import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    BarElement,
    LineElement,
    PointElement,
    Filler,
    ArcElement,
    CategoryScale,
    LinearScale
  } from 'chart.js'
  
  // registra globalmente todos os componentes necessários do Chart.js
  ChartJS.register(
    Title,
    Tooltip,
    Legend,
    BarElement,
    LineElement,
    PointElement,
    Filler,
    ArcElement,
    CategoryScale,
    LinearScale
  )
  