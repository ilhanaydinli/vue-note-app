<template>
  <v-main>
    <v-container class="py-2 px-2" fluid>
      <v-row>
        <v-col v-for="nott in notlar" :key="nott.id" cols="3">
          <v-card class="mx-auto my-12" max-width="374">
            <v-card-title>{{ nott.baslik }}</v-card-title>

            <v-card-text>
              {{ nott.icerik }}
            </v-card-text>

            <v-divider class="mx-4"></v-divider>

            <v-card-actions>
              <v-btn
                class="mx-2"
                fab
                dark
                x-small
                color="cyan"
                @click="
                  $router.push({ name: 'NotDuzenle', params: { id: nott.id } })
                "
              >
                <v-icon dark> mdi-pencil </v-icon>
              </v-btn>
              <v-btn
                class="mx-2"
                fab
                dark
                x-small
                color="red"
                @click="modalAc(nott.id)"
              >
                <v-icon dark> mdi-delete </v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>

      <v-dialog v-model="dialogDelete" max-width="500px">
        <v-card>
          <v-card-title class="text-h5">
            Silmek istediğinize emin misiniz?
          </v-card-title>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="modalKapat">
              Cancel
            </v-btn>
            <v-btn color="blue darken-1" text @click="sil"> OK </v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-container>
  </v-main>
</template>

<script>
import notlarDatasi from "../data";
export default {
  data: () => ({
    dialogDelete: false,
    notlar: notlarDatasi,
    silinecekId: null,
  }),
  methods: {
    sil() {
      var index = notlarDatasi.findIndex((not) => not.id == this.silinecekId);
      notlarDatasi.splice(index, 1);
      this.modalKapat();
    },
    modalAc(id) {
      this.silinecekId = id;
      this.dialogDelete = true;
    },
    modalKapat() {
      this.dialogDelete = false;
      this.silinecekId = null;
    },
  },
};
</script>
