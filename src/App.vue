<template>
  <v-app>
    <SidebarVue />
    <router-view />
  </v-app>
</template>


<script>
import SidebarVue from "./components/Sidebar.vue";
export default {
  components: {
    SidebarVue,
  },
};
</script>