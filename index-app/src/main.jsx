import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/fonts/Mikrobe-Extended.otf'
import './index.css'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
