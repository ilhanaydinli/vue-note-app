<template>
  <v-navigation-drawer permanent dark app>
    <v-list>
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://via.placeholder.com/150"></v-img>
        </v-list-item-avatar>
      </v-list-item>

      <v-list-item link>
        <v-list-item-content>
          <v-list-item-title class="text-h6"> İsim Soyisim </v-list-item-title>
          <v-list-item-subtitle>mail@gmail.com</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list nav dense>
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
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'Sidebar'
}
</script>
