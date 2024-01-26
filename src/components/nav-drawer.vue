<template>
  <div class="nav-drawer">
    <v-navigation-drawer app v-model="sCounter.drawer">
      <v-list>
        <v-list-item
          v-for="item in menuItems"
          :key="item.title"
          @click="selectItem(item)"
          :prepend-icon="item.icon"
          :title="item.title"
          :value="item.title"
          :to="item.to"
          exact
        >
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script setup>
import { storeCounter } from "@/stores/counter";
import { ref } from "vue";

const sCounter = storeCounter();
const menuItems = ref([
  { title: "Home", icon: "mdi-home", to: "/" },
  { title: "About", icon: "mdi-information", to: "/about" },
]);
const selectedItem = ref("Home");
const selectItem = (item) => {
  selectedItem.value = item.title.value;
};
</script>
