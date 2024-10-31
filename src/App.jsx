import './App.css'
import { useContext } from 'react'

import { TodoContext } from './context/TodoContext'
import { ModalContext } from './context/ModalContext'

import { TodoCounter } from './components/TodoCounter'
import { TodoSearch } from './components/TodoSearch'
import { TodoList } from './components/TodoList'
import { TodoListLoading } from './components/TodoListLoading'
import { Filters } from './components/Filters'
import { CreateTodoModal } from './components/CreateTodoModal'

export function App () {
  
  const { loading } = useContext(TodoContext)
  const { isCreateModalOpen, openCreateModal } = useContext(ModalContext)

  return (
    <div className='app'>
      <header>
        <TodoCounter/>
        <div className='header-box'>
          <TodoSearch/>
          <button onClick={openCreateModal}>Crear ToDo</button>
        </div>

        <Filters/>
      </header>

      <main>
        { loading ? <TodoListLoading count={6}/> : <TodoList /> }
      </main>

      { isCreateModalOpen && <CreateTodoModal /> }
    </div>  
  )
}
