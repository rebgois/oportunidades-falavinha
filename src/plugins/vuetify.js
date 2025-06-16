import "@mdi/font/css/materialdesignicons.css"
import "vuetify/styles"
import { VDateInput } from "vuetify/labs/VDateInput"
import { VForm } from "vuetify/components"
import { pt } from "vuetify/locale"
import { createVuetify } from "vuetify"

export default createVuetify({
  components: { VDateInput, VForm },
  locale: { locale: "pt", messages: { pt } },
  theme: {
    defaultTheme: "light",
    themes: {
      light: {
        dark: false,
        colors: {
          Erro: "#CB3D29",
          Denegado: "#808693",
          Autorizado: "#2C5A2B",
          Processando: "#705100",
          Cancelado: "#CB3D29",
          Rejeitado: "#8A3200",
          PrimaryFalavinha: "#145d61",
          BgPadrao: "#f3f4f6",
          CardBg: "#F9FAFB",
          CardBgHover: "#E6EFFA",
          BorderCardHover: "#005CCF",
          BorderCardGeral: "#D1D5DB",
          TextGrey: "#374151",
          CardPago: "#E7F2E7",
          CardPendente: "#FFFDE6",
          CardAtrasado: "#FFF5F7",
          BorderCardPago: "#00AE5B",
          BorderCardPendente: "#A5842F",
          BorderCardAtrasado: "#E6989F",
          BgView: "#FFF",
          ChartOrange: "#F08717",
        },
      },
    },
  },
})
