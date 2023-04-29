
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/header/Header'
import Banner from './components/banner/Banner'
import HangMoi from './components/HangMoi/HangMoi'
import HangMoiMeNu from './components/HangMoi/HangMoiMenu/HangMoiMeNu'
import TakeMeToSumBer from './page/TakeMeToSumBer'
import Sale from './page/Sale'
import ShowRom from './page/ShowRom'
import ChiTietSp from './page/ChiTietSp'
import HeaderAdmin from './Layout/LayoutAdmin'
import Dashboard from './Admin/Dashboard'
function App() {

  return (
    <BrowserRouter>
     
      <Routes>
         <Route path='/' element={<Header />}>
          <Route index element={<Banner />} />
          <Route index element={<HangMoi />} />

          <Route path='/' element={<Banner />} />
          <Route path='/hangmoimenu' element={<HangMoiMeNu />} />
          <Route path='/taketosumber' element={<TakeMeToSumBer />} />
          <Route path='/sale' element={<Sale />} />
          <Route path='/showrom' element={<ShowRom />} />
          <Route path='/chitiet' element={<ChiTietSp />} />





        </Route>
        <Route path='/admin' element={<HeaderAdmin/>}>
<Route index element={<Dashboard/>} />
        </Route>
    </Routes>
    
    </BrowserRouter>
  )
}

export default App
