import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MainPage from './components/Main-pages.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <MainPage/>
  </StrictMode>,
)
