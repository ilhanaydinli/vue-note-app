<template>
  <v-row align="center" justify="center">
    <v-col lg="8">
      <center v-if="$route.params.id">
        <h1>{{ $t('noteEdit') }}</h1>
      </center>
      <center v-else>
        <h1>{{ $t('noteAdd') }}</h1>
      </center>
      <v-form ref="form" v-model="valid">
        <v-text-field
          v-model="title"
          :label="this.$t('title')"
          :rules="[
            (v) => !!v || this.$t('requiredMsg', { name: this.$t('title') })
          ]"
          clearable
          required
        ></v-text-field>

        <v-textarea
          :label="this.$t('content')"
          name="content"
          required
          v-model="content"
          clearable
          :rules="[(v) => !!v || 'Content is required']"
        ></v-textarea>

        <v-btn color="success" class="mr-4" @click="save" :disabled="!valid">
          {{ $t('save') }}
        </v-btn>

        <v-btn color="primary" @click="clear">{{ $t('clear') }}</v-btn>
      </v-form>
    </v-col>
  </v-row>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Utils from '../utils/helper'

export default {
  name: 'NoteAdd',
  metaInfo() {
    if (this.$route.params.id) {
      return { title: this.$t('noteEdit') }
    }
    return { title: this.$t('noteAdd') }
  },
  data: () => ({
    valid: false,
    title: null,
    content: null
  }),
  props: {
    type: {
      type: String,
      default: ''
    }
  },
  watch: {
    type(val) {
      if (val == 'add') {
        this.clear()
      }
    }
  },
  computed: {
    ...mapGetters('notes', ['getNoteId']),
    reqiredRule(name = '') {
      return [(v) => !!v || this.$t('requiredMsg', { name: name })]
    }
  },
  methods: {
    ...mapActions('notes', ['addNote', 'editNote']),
    clear() {
      this.$refs.form.reset()
    },
    save() {
      let note = {
        id: this.$route.params.id ? this.$route.params.id : Utils.uuidv4(),
        title: this.title,
        content: this.content
      }
      if (this.$route.params.id) {
        this.editNote({ note: note })
      } else {
        this.addNote({ note: note })
      }
      this.$router.push({ name: 'Notes' })
    }
  },
  created() {
    if (this.$route.params.id) {
      var note = this.getNoteId(this.$route.params.id)
      this.title = note.title
      this.content = note.content
    }
    console.log('created')
  },
  beforeCreate() {
    console.log('beforeCreate')
  },
  beforeMount() {
    console.log('beforeMount')
  },
  mounted() {
    console.log('mounted')
  },
  beforeUpdate() {
    console.log('beforeUpdate')
  },
  updated() {
    console.log('updated')
  },
  beforeDestroy() {
    console.log('beforeDestroy')
  },
  destroyed() {
    console.log('destroyed')
  }
}
</script>

<style></style>
