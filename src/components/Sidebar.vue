<template>
  <v-navigation-drawer
    v-model="drawer"
    app
    :permanent="!smAndDown"
    :temporary="smAndDown"
    width="300"
  >
    <v-list>
      <v-list-item>
        <v-list-item-content>
          <img
            src="../assets/grupo-falavinha-next-logotipo.png"
            class="d-inline-block align-top pa-4"
          />
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
          <v-list-item-title class="text-PrimaryFalavinha">{{
            item.title
          }}</v-list-item-title>
        </div>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { computed } from "vue";
import { useDisplay } from "vuetify";

const props = defineProps({
  modelValue: Boolean,
});
const emit = defineEmits(["update:modelValue"]);

const drawer = computed({
  get: () => props.modelValue,
  set: (val) => emit("update:modelValue", val),
});

const { smAndDown } = useDisplay();
const items = [
  { title: "Vagas", icon: "mdi-briefcase", to: "/" },
  {
    title: "Por que nos escolher?",
    icon: "mdi mdi-heart-multiple",
    to: "/por-que-nos-escolher",
  },
  {
    title: "Banco de Talentos",
    icon: "mdi mdi-thought-bubble",
    to: "/banco-de-talentos",
  },
];
</script>
