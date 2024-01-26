import { defineStore } from "pinia";

export const storeCounter = defineStore({
  id: "counter",
  state: () => ({
    selectedItem: "Home",
    drawer: false,
    menuItems: [
      { title: "Home", icon: "mdi-home", to: "/" },
      { title: "About", icon: "mdi-information", to: "/about" },
    ],
  }),
  actions: {
    selectItem(item) {
      this.selectedItem = item.title;
      localStorage.setItem("selectedItem", this.selectedItem);
    },
  },
  onInit() {
    const savedSelectedItem = localStorage.getItem("selectedItem");
    if (savedSelectedItem) {
      this.selectedItem = savedSelectedItem;
    }
  },
});
