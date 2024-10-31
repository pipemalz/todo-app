import { useLocalStorage } from './useLocalStorage'
import { v4 as uuidv4 } from 'uuid'

export function useTodoList(initialValue) {
  const {
    items: todoList,
    saveItems: saveTodoList,
    loading,
    error
  } = useLocalStorage('todos', initialValue)

  const addTodo = ({ text }) => {
    try {
      const currentTodos = [...todoList]
      const todoExists = currentTodos.some(todo => todo.text.toLowerCase() === text.toLowerCase())

      if (todoExists) {
        return {
          success: false,
          message: 'Ya existe un todo con este nombre.'
        }
      }

      currentTodos.push({ id: uuidv4(), text, completed: false, date: new Date() })
      const newTodoList = currentTodos.sort((a, b) => b.date - a.date)

      saveTodoList(newTodoList)

      return {
        success: true,
        message: 'Creado con éxito.'
      }
    } catch (e) {
      return {
        success: false,
        message: e.toString()
      }
    }
  }

  const completeTodo = ({ id }) => {
    const currentTodos = [...todoList]

    currentTodos.forEach(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
    })
    saveTodoList(currentTodos)
  }

  const deleteTodo = ({ id }) => {
    const currentTodos = [...todoList]
    const indexToDelete = currentTodos.findIndex(todo => todo.id === id)

    currentTodos.splice(indexToDelete, 1)
    saveTodoList(currentTodos)
  }

  const editTodo = ({ id, newValue }) => {
    const currentTodos = [...todoList]
    const indexToEdit = currentTodos.findIndex(todo => todo.id === id)

    currentTodos[indexToEdit].text = newValue

    saveTodoList(currentTodos)
  }

  const completedTodos = todoList.filter(todo => todo.completed).length
  const totalTodos = todoList.length
  const pendingTodos = totalTodos - completedTodos

  return {
    todoList,
    completedTodos,
    totalTodos,
    pendingTodos,
    addTodo,
    completeTodo,
    deleteTodo,
    editTodo,
    loading,
    error
  }
}