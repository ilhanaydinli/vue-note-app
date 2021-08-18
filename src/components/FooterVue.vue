<template>
  <v-footer app inset padless>
    <v-row>
      <v-col class="primary text-center white--text overline pa-0 pb-2">
        {{ new Date().getFullYear() }} —
        <strong>Vue {{ $t('note') }} App</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  name: 'FooterVue'
}
</script>
