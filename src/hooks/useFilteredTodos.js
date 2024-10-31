import { useState, useEffect } from 'react'

export function useFilteredTodos(todoList) {
  const [filteredTodos, setFilteredTodos] = useState(todoList)
  const [filter, setFilter] = useState('all')
  const [searchValue, setSearchValue] = useState('')

  useEffect(() => {
    updateFilteredTodos(searchValue)
  }, [filter])

  useEffect(() => {
    updateFilteredTodos(searchValue)
  }, [searchValue])

  useEffect(() => {
    updateFilteredTodos(searchValue)
  }, [todoList])

  const getAllTodosByText = ({ todos, text }) => {
    if (text === '') return todos
    return todos.filter(todo => todo.text.toLowerCase().includes(text.toLowerCase()))
  }

  const getPendingTodosByText = ({ todos, text }) => {
    const pendingTodos = todos.filter(todo => !todo.completed)
    if (text === '') return pendingTodos
    return pendingTodos.filter(todo => todo.text.toLowerCase().includes(text.toLowerCase()))
  }

  const getCompletedTodosByText = ({ todos, text }) => {
    const completedTodos = todos.filter(todo => todo.completed)
    if (text === '') return completedTodos
    return completedTodos.filter(todo => todo.text.toLowerCase().includes(text.toLowerCase()))
  }

  const updateFilteredTodos = (searchValue) => {
    if (filter === 'all') {
      const allTodos = getAllTodosByText({ todos: todoList, text: searchValue })
      setFilteredTodos(allTodos)
    }
    if (filter === 'pending') {
      const pendingTodos = getPendingTodosByText({ todos: todoList, text: searchValue })
      setFilteredTodos(pendingTodos)
    }
    if (filter === 'completed') {
      const completedTodos = getCompletedTodosByText({ todos: todoList, text: searchValue })
      setFilteredTodos(completedTodos)
    }
  }

  const updateFilter = (filterName) => {
    setFilter(filterName)
  }

  const updateSearchValue = (newSearchValue) => {
    setSearchValue(newSearchValue)
  }

  return {
    filteredTodos,
    filter,
    updateFilter,
    searchValue,
    updateSearchValue
  }

}