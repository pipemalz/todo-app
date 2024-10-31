import React from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'
import './index.css'
import { TodoProvider } from './context/TodoContext'
import { ModalProvider } from './context/ModalContext'

const root = createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <TodoProvider>
      <ModalProvider>
        <App/>
      </ModalProvider>
    </TodoProvider>
  </React.StrictMode>
)