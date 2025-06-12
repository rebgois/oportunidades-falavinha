<template>
    <v-navigation-drawer
      app
      permanent
      
      width="300"

    >
      <v-list>
        <v-list-item>
          <v-list-item-content >
           <img src="../assets/grupo-falavinha-next-logotipo.png"  class="d-inline-block align-top pa-4 ">
          </v-list-item-content>
        </v-list-item>
        <v-divider />
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.to"
          link
          class="d-flex flex-row"

        >
          
          <div class="d-flex pa-4 pl-1">
            <v-list-item-icon class="px-4">
            <v-icon class="text-PrimaryFalavinha">{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title class="text-PrimaryFalavinha">{{ item.title }}</v-list-item-title>
          </div>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  
  const mini = ref(false)
  const items = [
    { title: 'Vagas', icon: 'mdi-briefcase', to: '/' },
    { title: 'Por que nos escolher?', icon: 'mdi mdi-heart-multiple', to: '/reasons' },
    { title: 'Sobre nós', icon: 'mdi-information', to: '/about' },
    { title: 'Dashboards', icon: 'mdi mdi-chart-pie', to: '/dashboards' },
    { title: 'Resultados', icon: 'mdi-rocket-launch', to: '/results' },
    { title: 'Banco de Talentos', icon: 'mdi mdi-thought-bubble', to: '/talents' },
  ]
  </script>