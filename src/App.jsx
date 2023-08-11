import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Index from './pt_components/Index'
import ProjectsPage from './pt_components/ProjectsPage'
import SecretWord from './pt_components/Projects/SecretWord/SecretWord'



import TestNavbar from './pt_components/TestNavbar'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/projects' element={<ProjectsPage />} />
          <Route path='/projects/secretword' element={<SecretWord />} />


        </Routes>
      
      </BrowserRouter>


    </div>
  )
}

export default App
