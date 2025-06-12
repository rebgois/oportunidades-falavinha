<template>
    <v-app>
      <Sidebar />
      <v-main class="bg-BgPadrao">
        <v-container fluid >
          <slot />
        </v-container>
      </v-main>
    </v-app>
  </template>
  
  <script setup>
  import Sidebar from '@/components/Sidebar.vue'
  </script>