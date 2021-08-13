<template>
  <v-app>
    <sidebar-vue />
    <content-vue>
      <router-view />
    </content-vue>
  </v-app>
</template>


<script>
import ContentVue from "./components/ContentVue.vue";
import SidebarVue from "./components/SidebarVue.vue";
export default {
  name: "App",
  components: {
    SidebarVue,
    ContentVue,
  },
};
</script>