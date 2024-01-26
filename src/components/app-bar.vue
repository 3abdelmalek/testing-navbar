<template>
  <div class="app-bar">
    <v-app-bar app color="primary">
      <v-app-bar-nav-icon
        variant="text"
        @click.stop="sCounter.drawer = !sCounter.drawer"
      ></v-app-bar-nav-icon>

      <v-toolbar-title> {{ route.name }} </v-toolbar-title>
    </v-app-bar>
  </div>
</template>
<script setup>
import { storeCounter } from "@/stores/counter";
import { useRoute } from "vue-router";

const sCounter = storeCounter();
const route = useRoute();

</script>
