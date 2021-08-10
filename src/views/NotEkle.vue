<template>
  <v-main>
    <v-container class="py-2 px-2" fluid>
      <v-row align="center" justify="center">
        <v-col cols="6" class="mt-15">
          <center v-if="$route.params.id"><h1>Not Düzenle</h1></center>
          <center v-else><h1>Not Ekle</h1></center>
          <v-form ref="form">
            <v-text-field
              v-model="baslik"
              label="Baslik"
              required
            ></v-text-field>

            <v-textarea
              label="İçerik"
              name="icerik"
              required
              v-model="icerik"
            ></v-textarea>

            <v-btn color="success" class="mr-4" @click="kaydet"> Kaydet </v-btn>

            <v-btn color="primary" @click="temizle"> Temizle </v-btn>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import notlarDatasi from "../data";

export default {
  data: () => ({
    baslik: null,
    icerik: null,
    notlar: notlarDatasi,
  }),
  methods: {
    temizle() {
      (this.baslik = null), (this.icerik = null);
    },
    kaydet() {
      console.log(this.baslik);
      if (this.$route.params.id) {
        //düzenleme
        var buldugumNotIndexi = this.notlar.findIndex(
          (not) => not.id == this.$route.params.id
        );
        notlarDatasi[buldugumNotIndexi] = {
          id: this.$route.params.id,
          baslik: this.baslik,
          icerik: this.icerik,
        };
      } else {
        //ekleme
        notlarDatasi.push({
          id: this.uuidv4(),
          baslik: this.baslik,
          icerik: this.icerik,
        });
      }
      this.$router.push({ name: "Notlar" });
    },
    uuidv4() {
      const a = crypto.getRandomValues(new Uint16Array(8));
      let i = 0;
      return "00-0-4-1-000".replace(/[^-]/g, (s) =>
        ((a[i++] + s * 0x10000) >> s).toString(16).padStart(4, "0")
      );
    },
  },
  mounted() {
    if (this.$route.params.id) {
      var buldugumNot = this.notlar.find(
        (not) => not.id == this.$route.params.id
      );
      this.baslik = buldugumNot.baslik;
      this.icerik = buldugumNot.icerik;
    }
  },
  /*beforeUpdate() {
    if (!this.$route.params.id) {
      this.baslik = null;
      this.icerik = null;
    }
  },*/
};
</script>

<style>
</style>