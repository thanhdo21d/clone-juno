
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/header/Header'
import Banner from './components/banner/Banner'

function App() {

  return (
    <BrowserRouter>
      <Routes>
         <Route path='/' element={<Header />}>
          <Route index element={<Banner />} />
        </Route>
    </Routes>
    
    </BrowserRouter>
  )
}

export default App
