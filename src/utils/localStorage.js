class LocalStorage {
  static set(key, data) {
    const storageData = {
      data: data
    }

    localStorage.setItem(key, JSON.stringify(storageData))
  }

  static get(key, blankValue = false) {
    const storageData = localStorage.getItem(key)
    if (storageData) {
      return JSON.parse(storageData).data
    }
    return blankValue
  }

  static delete(key) {
    localStorage.removeItem(key)
  }

  static clear() {
    localStorage.clear()
  }
}

export default LocalStorage
