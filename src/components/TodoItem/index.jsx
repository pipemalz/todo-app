import './TodoItem.css'

import { useContext } from 'react'
import { TodoContext } from '../../context/TodoContext'

import { DeleteTodoModal } from '../DeleteTodoModal'
import { EditTodoModal } from '../EditTodoModal'

import { FaCheck, FaCheckCircle, FaRegTrashAlt, FaRegEdit } from 'react-icons/fa'
import { ModalContext } from '../../context/ModalContext'

export function TodoItem ({ id, text, completed }) {

  const { isDeleteModalOpen, isEditModalOpen } = useContext(ModalContext)

  return (
    <>
      <ItemResult id={id} text={text} completed={completed} />

      { isDeleteModalOpen && <DeleteTodoModal id={id} text={text}/> }

      { isEditModalOpen && <EditTodoModal id={id} text={text}/> }
    </>
  )
}

function ItemResult ({ id, text, completed }) {

  const { completeTodo } = useContext(TodoContext)
  const { openDeleteModal, openEditModal } = useContext(ModalContext)

  return (
    <li className={ completed ? 'todo-item completed' : 'todo-item'} id={id}>
      <div className='controls-complete' >
        { completed
            ? <FaCheckCircle className='icon active completed' onClick={() => completeTodo({ id })}/>
            : <FaCheck className='icon complete' onClick={() => completeTodo({ id })}/>
        }
      </div>
      <p className='todo-text'>{text}</p>
      
      <div className='controls'>
        
        {!completed && 
        <div className='controls-edit' >
          <FaRegEdit className='icon edit' onClick={openEditModal}/>
        </div>
        }

        <div className='controls-delete'>
          <FaRegTrashAlt className='icon delete' onClick={openDeleteModal}/>
        </div>
      </div>
    </li>
  )
}



