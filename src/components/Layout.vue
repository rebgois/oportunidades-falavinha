<template>
  <v-app>
    <Sidebar v-model="drawer" />
    <v-app-bar class="d-md-none" color="PrimaryFalavinha" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <img
        src="@/assets/Logotipo-FalavinhaNextWhite.png"
        height="32"
        class="ml-2"
      />
    </v-app-bar>
    <v-main class="bg-BgPadrao">
      <v-container fluid>
        <slot />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useDisplay } from 'vuetify'
import Sidebar from '@/components/Sidebar.vue'

const { smAndDown } = useDisplay()
const drawer = ref(!smAndDown.value)

watch(smAndDown, (val) => {
  drawer.value = !val
})
</script>
