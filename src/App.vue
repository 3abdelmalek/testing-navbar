<template>
  <v-app>
    <!-- App Bar  -->
    <v-app-bar app color="primary">
      <v-app-bar-nav-icon
        variant="text"
        @click.stop="sCounter.drawer = !sCounter.drawer"
      ></v-app-bar-nav-icon>

      <v-toolbar-title>
        {{ sCounter.selectedItem }}
      </v-toolbar-title>
    </v-app-bar>

    <!-- Navigation Drawer -->
    <v-navigation-drawer app v-model="sCounter.drawer">
      <v-list>
        <v-list-item
          v-for="item in sCounter.menuItems"
          :key="item.title"
          @click="sCounter.selectItem(item)"
          :prepend-icon="item.icon"
          :title="item.title"
          :value="item.title"
          :to="item.to"
          exact
        >
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- Main Content -->
    <v-main class="d-flex justify-center align-center font-weight-bold">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script setup>
import { storeCounter } from "@/stores/counter";
const sCounter = storeCounter();
</script>
