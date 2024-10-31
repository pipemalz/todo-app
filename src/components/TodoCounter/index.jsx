import './TodoCounter.css'
import { useContext } from 'react'
import { TodoContext } from '../../context/TodoContext'

export function TodoCounter () {

  const { completedTodos, totalTodos } = useContext(TodoContext)

  return (
      completedTodos > 0 && completedTodos === totalTodos
      ? <h2> <span>Felicidades, has completado todos los ToDos</span> </h2>
      : <h2> Has completado <span> { completedTodos } </span> de <span> { totalTodos }</span> todos.</h2>    
  )
}