import './TodoList.css'
import { TodoItem } from '../TodoItem'
import { useContext } from 'react'
import { TodoContext } from '../../context/TodoContext'

export function TodoList () {
  const {
    filteredTodos: todos, 
    loading
  } = useContext(TodoContext)

  const hasTodos = todos?.length > 0

  return (
    <>
      { 
        hasTodos
        ? <TodoListResults />
        : !loading && <p className='p-no-results'> Nada por aquí! </p>
      }
    </>
  )
}

function TodoListResults () {
  const { filteredTodos: todos } = useContext(TodoContext)

  return (
    <ul className='todo-list'>
      {
        todos.map(todo => (
          <TodoItem key={todo.id} id={todo.id} text={todo.text} completed={todo.completed}/>
        ))
      }
    </ul>
  )
}