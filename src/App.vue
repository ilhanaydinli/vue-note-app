<template>
  <v-app>
    <sidebar-vue />
    <content-vue>
      <router-view />
    </content-vue>
  </v-app>
</template>

<script>
import { mapActions } from 'vuex'
import ContentVue from './components/ContentVue.vue'
import SidebarVue from './components/SidebarVue.vue'
export default {
  name: 'App',
  metaInfo() {
    return {
      title: 'Vue ' + this.$t('note') + ' App',
      titleTemplate: '%s | Vue ' + this.$t('note') + ' App'
    }
  },
  components: {
    SidebarVue,
    ContentVue
  },
  methods: {
    ...mapActions('notes', ['getNotes'])
  },
  created() {
    this.getNotes()
  }
}
</script>
