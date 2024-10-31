import { useContext } from 'react'
import { TodoContext } from '../../context/TodoContext'

export function TodoSearch () {

  const { searchValue, updateSearchValue } = useContext(TodoContext)

  const handleChange = (e) => {
    const newValue = e.target.value
    updateSearchValue(newValue)
  }

  return (
    <input type='text' value={searchValue} onChange={handleChange} placeholder='Buscar...'/>
  )
}