<template>
  <v-app>
    <!-- App Bar  -->
    <app-bar />

    <!-- Navigation Drawer -->
    <nav-drawer/>

    <!-- Main Content -->
    <main-content/>
    
  </v-app>
</template>

<script setup>
import AppBar from "@/components/app-bar.vue";
import NavDrawer from "@/components/nav-drawer.vue";
import MainContent from "@/components/main-content.vue";
</script>
