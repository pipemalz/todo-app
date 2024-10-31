export async function setItemsOnLocalStorage(key, items) {
  try {
    localStorage.setItem(key, JSON.stringify(items))
    return true
  } catch (e) {
    return e
  }
}