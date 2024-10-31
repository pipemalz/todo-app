import './Modal.css'
import { createPortal } from 'react-dom'

export function Modal ({ children, closeModal }){
  
  return createPortal(
    <div className='modal-window'>
      <div className='modal-content'>
        <button className='btn-close-modal' onClick={closeModal}>X</button>
        { children }
      </div>
    </div>,
    document.getElementById('modal')
  )
}