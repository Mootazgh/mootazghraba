import './App.scss'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/Home/About'
import Contact from './components/Contact'
import Sidebar from './components/Sidebar'
function App() {
  return (
    <div>
      <Sidebar></Sidebar>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home></Home>}></Route>
          <Route path="about" element={<About></About>}></Route>
          <Route path="contact" element={<Contact></Contact>}></Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
