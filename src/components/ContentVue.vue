<template>
  <v-main>
    <slot></slot>
    <footer-vue />
  </v-main>
</template>

<script>
import FooterVue from './FooterVue.vue'
export default {
  name: 'ContentVue',
  components: {
    FooterVue
  }
}
</script>

<style></style>
