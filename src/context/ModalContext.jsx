import React, { useState } from 'react'

const ModalContext = React.createContext()

function ModalProvider({ children }) {
  
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)

  const openCreateModal = () => setIsCreateModalOpen(true)
  const openEditModal = () => setIsEditModalOpen(true)
  const openDeleteModal = () => setIsDeleteModalOpen(true)

  const closeCreateModal = () => setIsCreateModalOpen(false)
  const closeEditModal = () => setIsEditModalOpen(false)
  const closeDeleteModal = () => setIsDeleteModalOpen(false)

  return (
    <ModalContext.Provider value={{
      isCreateModalOpen,
      isEditModalOpen,
      isDeleteModalOpen,
      openCreateModal,
      openEditModal,
      openDeleteModal,
      closeCreateModal,
      closeEditModal,
      closeDeleteModal
    }}>
      {children}
    </ModalContext.Provider>
  )
}

export { ModalContext, ModalProvider }