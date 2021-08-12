<template>
  <v-main>
    <v-container class="py-2 px-2" fluid>
      <v-row align="center" justify="center">
        <v-col cols="6" class="mt-15">
          <center v-if="$route.params.id"><h1>Note Edit</h1></center>
          <center v-else><h1>Note Add</h1></center>
          <v-form ref="form" v-model="valid">
            <v-text-field
              v-model="baslik"
              label="Title"
              :rules="[(v) => !!v || 'Title is required']"
              clearable
              required
            ></v-text-field>

            <v-textarea
              label="Content"
              name="icerik"
              required
              v-model="icerik"
              clearable
              :rules="[(v) => !!v || 'Content is required']"
            ></v-textarea>

            <v-btn
              color="success"
              class="mr-4"
              @click="kaydet"
              :disabled="!valid"
            >
              Kaydet
            </v-btn>

            <v-btn color="primary" @click="temizle"> Temizle </v-btn>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import notlarDatasi from "../data";
import Utils from "../utils";

export default {
  data: () => ({
    valid: false,
    baslik: null,
    icerik: null,
    notlar: notlarDatasi,
  }),
  methods: {
    temizle() {
      this.$refs.form.reset();
    },
    kaydet() {
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
          id: Utils.uuidv4(),
          baslik: this.baslik,
          icerik: this.icerik,
        });
      }
      this.$router.push({ name: "Notlar" });
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