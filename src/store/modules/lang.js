import Cookies from 'js-cookie'

const locale = 'tr'
const locales = { en: 'EN', tr: 'TR' }
// state
export const state = {
  locale: getLocale(locales, locale),
  locales: locales
}

// getters
export const getters = {
  locale: (state) => state.locale,
  locales: (state) => state.locales
}

// mutations
export const mutations = {
  ['SET_LOCALE'](state, { locale }) {
    state.locale = locale
  }
}

// actions
export const actions = {
  setLocale({ commit }, { locale }) {
    commit('SET_LOCALE', { locale })

    console.log(locale)

    Cookies.set('locale', locale, { expires: 365 })
  }
}

function getLocale(locales, fallback) {
  const locale = Cookies.get('locale')

  if (Object.prototype.hasOwnProperty.call(locales, locale)) {
    return locale
  } else if (locale) {
    Cookies.remove('locale')
  }

  return fallback
}
