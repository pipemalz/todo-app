import './CreateTodoForm.css'
import { useState, useContext } from 'react'
import { TodoContext } from '../../context/TodoContext'
import { ModalContext } from '../../context/ModalContext'

export function CreateTodoForm () {

  const { addTodo, updateSearchValue, updateFilter } = useContext(TodoContext)
  const { closeCreateModal } = useContext(ModalContext)
  
  const [inputValue, setInputValue] = useState('')
  const [result, setResult] = useState('')

  const handleChange = (e) => {
    const newValue = e.target.value
    setInputValue(newValue)
    setResult(null)
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()

    if (inputValue === '') {
      setResult({
        success: false,
        message: 'Ingrese un valor'
      })
      return
    }

    const newResult = addTodo({ text: inputValue })
    setResult(newResult)
    
    if (!newResult.success) return
    
    setInputValue('')
    updateSearchValue('')
    updateFilter('all')
    closeCreateModal()
  }
  return (
    <form onSubmit={handleSubmit} className='form-create-todo'>
      <input value={inputValue} onChange={handleChange} type='text' placeholder='Nombre del ToDo'/>
      <button type='submit'>Crear ToDo</button>
      { result && <p> { result.message } </p> }
    </form>
  )
}