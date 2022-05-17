import './styles/App.css'
import { Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import Pottery from './pages/Pottery'
import Create from './pages/Create'
import Types from './pages/Types'
import { landingLogo } from './ImageLinks'
import Home from './pages/Home'
import BackVid from './components/BackVid'
import TypesSection from './pages/TypesSection'

function App() {
  return (
    <div>
      <Nav />
      <BackVid />
      <main>
        <Routes>
          <Route path="/" element={<Home landingLogo={landingLogo} />} />
          <Route
            path="/pottery"
            element={<Pottery landingLogo={landingLogo} />}
          />
          <Route path="/types" element={<Types landingLogo={landingLogo} />} />
          <Route
            path="/types/:types"
            element={<TypesSection landingLogo={landingLogo} />}
          />
          <Route
            path="/create"
            element={<Create landingLogo={landingLogo} />}
          />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
