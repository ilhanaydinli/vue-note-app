<template>
  <v-footer padless absolute>
    <v-row>
      <v-col class="primary lighten py-6 text-center white--text">
        {{ new Date().getFullYear() }} — <strong>Vue Note App</strong>
      </v-col>
      <v-col class="primary lighten text-center white--text" cols="1">
        <v-select
          v-model="$i18n.locale"
          :items="langs"
          dark
          height="10"
        ></v-select>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  name: "FooterVue",
  data() {
    return { langs: ["tr", "en"] };
  },
};
</script>

<style scoped>
</style>