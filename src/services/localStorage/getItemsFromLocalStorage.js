export async function getItemsFromLocalStorage(key) {
  try {
    const data = localStorage.getItem(key)
    const items = JSON.parse(data)

    return items
  } catch (e) {
    return e
  }
}