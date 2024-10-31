import { useEffect } from 'react'
import { useState } from 'react'
import { getItemsFromLocalStorage } from '../services/localStorage/getItemsFromLocalStorage.js'
import { setItemsOnLocalStorage } from '../services/localStorage/setItemsOnLocalStorage.js'

export function useLocalStorage(key, initialValue) {
  const [items, setItems] = useState(initialValue)
  const [loading, setLoading] = useState({
    initialLoading: true
  })
  const [error, setError] = useState(false)

  useEffect(() => {
    getItemsFromLocalStorage(key)
      .then(items => {
        setTimeout(() => {
          setLoading(false)
          setError(false)
          if (items === null) {
            return
          }
          setItems(items)
        }, 10)
      })
      .catch(error => {
        setLoading(false)
        setError(error)
      })
  }, [])

  const saveItems = (items) => {
    setLoading(true)
    setItemsOnLocalStorage(key, items)
      .then(() => {
        setTimeout(() => {
          setLoading(false)
          setError(false)
          setItems(items)
        }, 10)
      })
      .catch(error => {
        setLoading(false)
        setError(error)
      })
  }

  return { items, saveItems, loading, error }
}