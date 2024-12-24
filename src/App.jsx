import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import './styles.scss';
import $ from 'jquery';
import Navbar from './component/Navbar';
import Member from './pages/Member';
import Qa from './pages/Qa';
import AOS from 'aos';
import 'aos/dist/aos.css';



function App() {

  // 啟動AOS
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/member' element={<Member />}></Route>
        <Route path='/qa' element={<Qa />}></Route>
      </Routes>
  

    </div>
  )
}

export default App
