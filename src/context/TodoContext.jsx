import React from 'react'
import { useTodoList } from '../hooks/useTodoList'
import { useFilteredTodos } from '../hooks/useFilteredTodos'

const TodoContext = React.createContext()

function TodoProvider({ children }) {

  const {
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
  } = useTodoList([])

  const {
    filteredTodos,
    filter,
    updateFilter,
    searchValue,
    updateSearchValue
  } = useFilteredTodos(todoList)

  return (
    <TodoContext.Provider value={{
      todoList,
      completedTodos,
      totalTodos,
      pendingTodos,
      addTodo,
      completeTodo,
      deleteTodo,
      editTodo,
      loading,
      error,
      filteredTodos,
      filter,
      updateFilter,
      searchValue,
      updateSearchValue
    }}>
      {children}
    </TodoContext.Provider>
  )
}

export {TodoContext, TodoProvider}