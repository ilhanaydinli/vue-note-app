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
      <v-list-item link @click="$router.push({ path: '/' })">
        <v-list-item-icon>
          <v-icon>mdi-home</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Ana Sayfa</v-list-item-title>
      </v-list-item>
      <v-list-item link @click="$router.push({ path: '/notlar' })">
        <v-list-item-icon>
          <v-icon>mdi-book</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Notlarım</v-list-item-title>
      </v-list-item>
      <v-list-item link @click="$router.push({ name: 'NotEkle' })">
        <v-list-item-icon>
          <v-icon>mdi-book-plus</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Yeni Not Ekle</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "Sidebar",
};
</script>