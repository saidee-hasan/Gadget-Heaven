import { createContext, StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import routes from './routes/Routes'

export const ProductContext = createContext();


createRoot(document.getElementById('root')).render(
  <StrictMode>
<RouterProvider router={routes}></RouterProvider>
  </StrictMode>,
)
