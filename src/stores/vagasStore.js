
import { defineStore } from 'pinia'
import { vagasFalavinhaNext } from '@/mocks/vagasMock'

export const useVagasStore = defineStore('vagas', {
  state: () => ({
    lista: []
  }),
  actions: {
    carregarVagas() {
      this.lista = vagasFalavinhaNext
    }
  }
})