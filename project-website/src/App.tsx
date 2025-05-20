// App.tsx
import { Routes, Route } from 'react-router-dom'
import About from './pages/About.tsx'
import Contact from './pages/Contact'

function App() {
  return (
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<div>Welcome to Our Research Project</div>} />
    </Routes>
  )
}

export default App
