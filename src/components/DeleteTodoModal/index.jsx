import { useContext } from 'react'
import { TodoContext } from '../../context/TodoContext'
import { ModalContext } from '../../context/ModalContext'

import { Modal } from '../Modal'

export function DeleteTodoModal ({ id, text }) {

  const { deleteTodo } = useContext(TodoContext)
  const { closeDeleteModal } = useContext(ModalContext)

  const deleteTodoOnEvent = () => {
    closeDeleteModal(false)
    deleteTodo({ confirm: true, id })
  }

  return (
    <Modal closeModal={closeDeleteModal}>
      <div className='confirmation-container'>
        <blockquote>&quot;{text}&quot;</blockquote>
        <p> Está seguro que desea eliminar este ToDo ? </p>
        <button className='delete-btn' onClick={deleteTodoOnEvent} autoFocus={true}>Si</button>
        <button onClick={closeDeleteModal}>No</button>
      </div>
    </Modal>
  )
}