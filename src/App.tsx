
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/header/Header'
import Banner from './components/banner/Banner'
import HangMoi from './components/HangMoi/HangMoi'

function App() {

  return (
    <BrowserRouter>
      <Routes>
         <Route path='/' element={<Header />}>
          <Route index element={<Banner />} />
          <Route index element={<HangMoi />} />

          <Route path='/' element={<Banner />} />
        </Route>
    </Routes>
    
    </BrowserRouter>
  )
}

export default App
