import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home, Staff } from './routes'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/staff" element={<Staff />} />
        {/* ADD OTHER ROUTES HERE IF NECESSARY */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
