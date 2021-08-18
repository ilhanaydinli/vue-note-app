<template>
  <div>
    <v-main>
      <v-container fluid>
        <slot></slot>
      </v-container>
    </v-main>
    <footer-vue />
  </div>
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
