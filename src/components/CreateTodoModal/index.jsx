import { useContext } from 'react'
import { ModalContext } from '../../context/ModalContext'
import { Modal } from '../Modal'
import { CreateTodoForm } from '../CreateTodoForm'

export function CreateTodoModal () {
  const { closeCreateModal } = useContext(ModalContext)

  return (
    <Modal closeModal={ closeCreateModal }>
      <CreateTodoForm />
    </Modal>
  )
}