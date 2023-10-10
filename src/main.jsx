import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Routes.jsx'
// import AuthProvider from './Provider/AuthProvider'
import AuthProbiders from './providers/AuthProbiders'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProbiders>
    <RouterProvider router={router}></RouterProvider>
    </AuthProbiders>
  </React.StrictMode>,
)
