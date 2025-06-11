<template>
    <v-navigation-drawer
      app
      permanent
      :mini-variant="mini"
      width="240"
      @mouseenter="mini = false"
      @mouseleave="mini = true"
    >
      <v-list>
        <v-list-item>
          <v-list-item-content v-if="!mini">
            <v-list-item-title class="text-h6 font-weight-bold">FALAVINHA NEXT</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider />
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.to"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title v-if="!mini">{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  
  const mini = ref(false)
  const items = [
    { title: 'Jobs', icon: 'mdi-briefcase', to: '/' },
    { title: 'Companies', icon: 'mdi-domain', to: '/companies' },
    { title: 'Salaries', icon: 'mdi-currency-usd', to: '/salaries' },
    { title: 'Career paths', icon: 'mdi-trending-up', to: '/paths' }
  ]
  </script>