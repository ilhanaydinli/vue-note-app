//import Vue from 'vue'
// state
export const state = {
  notes: []
}

// getters
export const getters = {
  notes: (state) => state.notes
}

// mutations
export const mutations = {
  setNotes(state, { notes }) {
    state.notes = notes
  }
}

// actions
export const actions = {
  /*getNotes() {
    const notes = Vue.localStorage.get('notes')
    commit('setNotes', { notes })
}
  setLocale({ commit }, { locale }) {
        commit('SET_LOCALE', { locale })

        console.log(locale);

        Cookies.set('locale', locale, { expires: 365 })
    }*/
}
