<template>
  <div>
    <v-row>
      <v-col v-for="(note, index) in notes" :key="note.id" lg="4">
        <v-card>
          <v-card-title>{{ note.title }}</v-card-title>

          <v-card-text>
            {{ note.content }}
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
                $router.push({ name: 'NoteEdit', params: { id: note.id } })
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
              @click="modalOpen(index)"
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
          {{ $t('areYouDelete') }}
        </v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="modalClose">
            {{ $t('cancel') }}
          </v-btn>
          <v-btn color="blue darken-1" text @click="sil">
            {{ $t('delete') }}
          </v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Notes',
  metaInfo() {
    return { title: this.$t('notes') }
  },
  data: () => ({
    dialogDelete: false,
    delIndex: null
  }),
  computed: {
    ...mapGetters('notes', ['notes'])
  },
  methods: {
    ...mapActions('notes', ['getNotes', 'delNote']),
    sil() {
      this.delNote({ id: this.delIndex })
      this.modalClose()
    },

    modalOpen(id) {
      this.delIndex = id
      this.dialogDelete = true
    },
    modalClose() {
      this.dialogDelete = false
      this.delIndex = null
    }
  }
}
</script>
