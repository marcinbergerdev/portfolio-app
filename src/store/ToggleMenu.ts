import { defineStore } from "pinia";
import { ref } from "vue";

export const useToggleMenu = defineStore("toggleMenu", () => {
   const isOpen = ref<boolean>(false);

   const openMenuHandler = () => {
      isOpen.value = true;
   };
   const closeMenuHandler = () => {
      isOpen.value = false;
   };
   const toggleMenuHandler = () => {
      isOpen.value = !isOpen.value;
   };

   return { isOpen, openMenuHandler, closeMenuHandler, toggleMenuHandler };
});