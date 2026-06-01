import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './routes/Home'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* ADD OTHER ROUTES HERE IF NECESSARY */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
