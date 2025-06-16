<template>
    <v-container fluid class="py-10">
      <!-- Hero Section -->
      <v-row justify="center">
        <v-col cols="12" md="8" class="text-center">
          <h1 class="display-1 font-weight-bold">Results</h1>
          <p class="subtitle-1 mt-2">
            Collaborative environment • Accelerated career growth • Diversity & innovation
          </p>
          <v-btn color="PrimaryFalavinha" class="mt-4" to="/open-positions">
            See Open Positions
          </v-btn>
        </v-col>
      </v-row>
  
      <!-- KPIs Section -->
      <v-row class="my-12" justify="center" dense>
        <v-col cols="6" sm="3" v-for="(item, i) in kpis" :key="i">
          <v-card class="pa-6 text-center">
            <v-icon size="36">{{ item.icon }}</v-icon>
            <div class="headline font-weight-bold mt-2">{{ item.value }}</div>
            <div class="body-2 text-secondary">{{ item.label }}</div>
          </v-card>
        </v-col>
      </v-row>
  
      <!-- Culture & Values -->
      <v-row class="my-12">
        <v-col cols="12" md="6">
          <h2 class="subtitle-1 font-weight-bold mb-4">Our Culture &amp; Values</h2>
          <p>
            At Falavinha Next, our mission is to empower every team member with autonomy,
            open communication, and a relentless focus on innovation.
          </p>
          <v-list dense>
            <v-list-item v-for="(val, i) in values" :key="i">
              <v-list-item-icon>
                <v-icon color="PrimaryFalavinha">mdi-check-circle</v-icon>
              </v-list-item-icon>
              <v-list-item-content>{{ val }}</v-list-item-content>
            </v-list-item>
          </v-list>
        </v-col>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
        <v-col cols="12" md="6">
          <!-- <v-img
            src="@/assets/office.jpg"
            aspect-ratio="1.7"
            class="rounded-lg"
          /> -->
        </v-col>
      </v-row>
  
      <!-- Benefits & Perks -->
      <v-row class="my-12" dense>
        <v-col cols="12" class="text-center mb-6">
          <h2 class="subtitle-1 font-weight-bold">Benefits & Perks</h2>
        </v-col>
        <v-col cols="6" sm="4" md="2" v-for="(b, i) in benefits" :key="i">
          <v-card class="pa-4 text-center">
            <v-icon size="32">{{ b.icon }}</v-icon>
            <div class="body-2 font-weight-bold mt-2">{{ b.label }}</div>
          </v-card>
        </v-col>
      </v-row>
  
      <!-- Testimonials -->
      <v-row class="my-12">
        <v-col cols="12">
          <h2 class="subtitle-1 font-weight-bold mb-6 text-center">
            What Our Team Says
          </h2>
          <v-carousel hide-delimiter-background height="200">
            <v-carousel-item v-for="(t, i) in testimonials" :key="i">
              <blockquote class="mx-auto">"{{ t.quote }}"</blockquote>
              <div class="mt-2 font-weight-bold text-center">
                — {{ t.name }}, {{ t.role }}
              </div>
            </v-carousel-item>
          </v-carousel>
        </v-col>
      </v-row>
  
      <!-- Final CTA -->
      <v-row justify="center" class="my-12">
        <v-col cols="12" md="6" class="text-center">
          <v-card class="pa-10 rounded-lg">
            <h2 class="title font-weight-bold">Ready to Join Falavinha Next?</h2>
            <v-btn color="PrimaryFalavinha" large class="mt-4" to="/open-positions">
              View Open Positions
            </v-btn>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const kpis = ref([
    { icon: 'mdi-calendar', value: '10+ yrs', label: 'Experience' },
    { icon: 'mdi-account-group', value: '200+', label: 'Employees' },
    { icon: 'mdi-star', value: '85%', label: 'Retention Rate' },
    { icon: 'mdi-trophy', value: 'Great Place To Work', label: 'Award' }
  ])
  
  const values = [
    'Autonomy',
    'Open Communication',
    'Customer Focus',
    'Continuous Innovation'
  ]
  
  const benefits = ref([                          
    { icon: 'mdi-heart-pulse', label: 'Health & Dental' },
    { icon: 'mdi-home-city', label: 'Remote Flex' },
    { icon: 'mdi-silverware-fork-knife', label: 'Meal Allowance' },
    { icon: 'mdi-school', label: 'Learning Programs' },             
    { icon: 'mdi-video', label: 'Team Events' }
  ])
  
  const testimonials = ref([
    {
      quote: 'I advanced from intern to mid-level in just 6 months.',
      name: 'Ana',
      role: 'Front-End Developer'
    },
    {
      quote: 'The culture here fosters growth every day.',
      name: 'Carlos',
      role: 'Data Analyst'
    }
  ])
  </script>
  
  <style scoped>
  blockquote {
    font-style: italic;
    line-height: 1.4;
    margin: 0 auto;
    max-width: 600px;
  }
  </style>  