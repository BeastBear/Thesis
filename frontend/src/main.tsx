import React from 'react'
import ReactDom from 'react-dom/client'
import './global.css'
import { BrowserRouter as Router } from 'react-router-dom'
import AppRoutes from './AppRoutes'

ReactDom.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <AppRoutes />
    </Router>
  </React.StrictMode>,
)
