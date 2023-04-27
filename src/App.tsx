import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayoutClient from "./Layout/LayoutClient/LayoutClient";
import Homepages from "./Client/HomePages/Homepages";
import HangMoiMeNu from "./components/HangMoi/HangMoiMenu/HangMoiMeNu";

import LayoutAdmin from "./Layout/LayoutAdmin/LayoutAdmin";
import Dashboard from "./Admin/Dashboard/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutClient />}>
          <Route index element={<Homepages />} />
          <Route path="/hangmoimenu" element={<HangMoiMeNu />} />
          {/* <Route path="/taketosumber" element={<TakeMeToSumBer />} /> */}
        </Route>
        <Route path="/admin" element={<LayoutAdmin />}>
          <Route index element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
