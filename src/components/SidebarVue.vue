<template>
  <div>
    <v-app-bar color="blue" dark app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>{{ $t('note') }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-select
        hide-details="auto"
        @change="setLocale"
        :value="locale"
        :items="Object.keys(locales)"
        outlined
      ></v-select>
    </v-app-bar>
    <v-navigation-drawer dark v-model="drawer" app bottom>
      <v-list>
        <v-list-item>
          <v-list-item-avatar>
            <v-img src="https://via.placeholder.com/150"></v-img>
          </v-list-item-avatar>
        </v-list-item>

        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title class="text-h6">
              İsim Soyisim
            </v-list-item-title>
            <v-list-item-subtitle>mail@gmail.com</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list nav dense>
        <v-list-item-group v-model="group" active-class="deep-grey">
          <v-list-item link :to="{ path: '/' }">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ $t('homePage') }}</v-list-item-title>
          </v-list-item>
          <v-list-item link :to="{ path: '/notes' }">
            <v-list-item-icon>
              <v-icon>mdi-book</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ $t('notes') }}</v-list-item-title>
          </v-list-item>
          <v-list-item link :to="{ name: 'NoteAdd', params: { type: 'add' } }">
            <v-list-item-icon>
              <v-icon>mdi-book-plus</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ $t('newNote') }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { loadMessages } from '../plugins/i18n'
export default {
  name: 'Sidebar',
  data: () => ({
    drawer: true,
    group: null
  }),
  computed: mapGetters({
    locale: 'lang/locale',
    locales: 'lang/locales'
  }),
  methods: {
    setLocale(locale) {
      if (this.$i18n.locale !== locale) {
        loadMessages(locale)

        this.$store.dispatch('lang/setLocale', { locale })
      }
    }
  }
}
</script>
