import { defineStore } from "pinia";

export const storeCounter = defineStore({
  id: "counter",
  state: () => ({
    drawer: false,
  }),
});
