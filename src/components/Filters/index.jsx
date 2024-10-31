import './Filters.css'

import { useContext } from 'react'
import { TodoContext } from '../../context/TodoContext'

export function Filters () {

  const { updateFilter, filter, completedTodos, totalTodos, pendingTodos } = useContext(TodoContext)

  return (
    <div className='filters'>
      <button className={`btn-filter ${ filter === 'all' ? 'active': ''}`} onClick={()=> updateFilter('all')}>Todos ({totalTodos})</button>
      <button className={`btn-filter ${ filter === 'pending' ? 'active': ''}`} onClick={()=> updateFilter('pending')}>Pendientes ({pendingTodos})</button>
      <button className={`btn-filter ${ filter === 'completed' ? 'active': ''}`} onClick={()=> updateFilter('completed')}>Completados ({completedTodos})</button>
    </div>
  )
}