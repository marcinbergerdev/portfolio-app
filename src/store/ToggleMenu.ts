import { defineStore } from 'pinia';
import {ref, computed } from 'vue';


export const useToggleMenu = defineStore('toggleMenu', () => {

  const isOpen = ref(false);






  const openMenuHandler = () => {
    isOpen.value = true;
  }
  const closeMenuHandler = () => {
    isOpen.value = true;
  }
  const toggleMenuHandler = () => {
    isOpen.value = true;
  }





  return {isOpen, openMenuHandler, closeMenuHandler, toggleMenuHandler}
});