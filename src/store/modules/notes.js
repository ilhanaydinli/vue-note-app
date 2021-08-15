import LocalStorage from '../../utils/localStorage'

// state
export const state = {
  notes: []
}

// getters
export const getters = {
  notes: (state) => state.notes,
  getNoteId: (state) => (id) => {
    return state.notes.find((note) => note.id === id)
  }
}

// mutations
export const mutations = {
  setNotes(state, { notes, localSet = true }) {
    state.notes = notes
    if (localSet) {
      LocalStorage.set('notes', notes)
    }
  }
}

// actions
export const actions = {
  getNotes({ commit }) {
    let notes = LocalStorage.get('notes', [])
    commit('setNotes', { notes: notes, localSet: false })
  },
  addNote({ commit, getters }, { note }) {
    let notes = getters.notes
    notes.push(note)
    commit('setNotes', { notes: notes })
  },
  editNote({ commit, getters }, { note }) {
    let notes = getters.notes
    if (notes.length) {
      let index = notes.findIndex((not) => not.id == note.id)
      notes[index] = note
      commit('setNotes', { notes: notes })
    }
  },
  delNote({ commit, getters }, { index }) {
    let notes = getters.notes
    if (notes.length) {
      notes.splice(index, 1)
      commit('setNotes', { notes: notes })
    }
  }
}
