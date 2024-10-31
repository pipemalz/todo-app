import { useContext, useEffect, useState } from 'react'
import { TodoContext } from '../../context/TodoContext'
import { ModalContext } from '../../context/ModalContext'
import { Modal } from '../Modal'

export function EditTodoModal ({ id, text }) {
  const { editTodo } = useContext(TodoContext)
  const { isEditModalOpen, closeEditModal } = useContext(ModalContext)

  const [editValue, setEditValue] = useState(text)

  useEffect(()=> {
    setEditValue(text)
  }, [isEditModalOpen])

  const editTodoOnEvent = () => {
    closeEditModal()
    if(text !== editValue) editTodo({ id, newValue: editValue })
  }

  const handleChange = (e) => {
    const newValue = e.target.value
    setEditValue(newValue)
  }

  return (
    <Modal closeModal={closeEditModal}>
      <div className='confirmation-container' onKeyUp={(e)=> {if(e.key === 'Enter') editTodoOnEvent()}}>
        <input type='text' value={editValue} onChange={handleChange} />
        <button onClick={editTodoOnEvent} autoFocus={true}>Aceptar</button>
      </div>
    </Modal>
  )
}