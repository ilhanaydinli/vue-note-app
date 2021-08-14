<template>
  <v-footer padless absolute>
    <v-row>
      <v-col class="primary lighten py-6 text-center white--text">
        {{ new Date().getFullYear() }} — <strong>Vue Note App</strong>
      </v-col>
      <v-col class="primary lighten text-center white--text" cols="1">
        <v-select
          @change="setLocale"
          :value="locale"
          :items="Object.keys(locales)"
          dark
          height="10"
        ></v-select>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
import { mapGetters } from "vuex";
import { loadMessages } from "../plugins/i18n";

export default {
  name: "FooterVue",
  data() {
    return { langs: ["tr", "en"] };
  },
  computed: mapGetters({
    locale: "lang/locale",
    locales: "lang/locales",
  }),
  methods: {
    setLocale(locale) {
      if (this.$i18n.locale !== locale) {
        loadMessages(locale);

        this.$store.dispatch("lang/setLocale", { locale });
      }
    },
  },
};
</script>