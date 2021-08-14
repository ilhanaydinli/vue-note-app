<template>
  <v-container class="py-2 px-2" fluid>
    <v-row align="center" justify="center">
      <v-col cols="6" class="mt-15">
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
  </v-container>
</template>

<script>
import notlarDatasi from '../data'
import Utils from '../utils'

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
    content: null,
    notlar: notlarDatasi
  }),
  methods: {
    clear() {
      this.$refs.form.reset()
    },
    save() {
      if (this.$route.params.id) {
        //düzenleme
        var buldugumNotIndexi = this.notlar.findIndex(
          (not) => not.id == this.$route.params.id
        )
        notlarDatasi[buldugumNotIndexi] = {
          id: this.$route.params.id,
          title: this.title,
          content: this.content
        }
      } else {
        //ekleme
        notlarDatasi.push({
          id: Utils.uuidv4(),
          title: this.title,
          content: this.content
        })
      }
      this.$router.push({ name: 'Notlar' })
    }
  },
  computed: {
    reqiredRule(name = '') {
      const de = this.$t.bind(this)
      console.log(de)
      return [(v) => !!v || this.$t('requiredMsg', { name: name })]
    }
  },
  mounted() {
    if (this.$route.params.id) {
      var buldugumNot = this.notlar.find(
        (not) => not.id == this.$route.params.id
      )
      this.title = buldugumNot.title
      this.content = buldugumNot.content
    }
  }
  /*beforeUpdate() {
    if (!this.$route.params.id) {
      this.title = null;
      this.content = null;
    }
  },*/
}
</script>

<style></style>
