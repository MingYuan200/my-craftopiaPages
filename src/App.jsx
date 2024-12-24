import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import './styles.scss';
import $ from 'jquery';
import Navbar from './component/Navbar';
import Member from './pages/Member';
import Qa from './pages/Qa';
import Try from './pages/Try';
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
        <Route path='/try' element={<Try />}></Route>
      </Routes>

      {/* <h1>Aos</h1>
      <div className="box" data-aos='fade-up' data-aos-duration='600'>
        <p>fade up</p>
      </div> */}

      {/* <section className='indexBanner'>
        <div className="banner-mask"></div>
      </section>


      <div className="content">

        <img src="./images/blob-1.svg" alt="" className='blob-1' />
        <img src="./images/blob-2.svg" alt="" className='blob-2' />
        <img src="./images/blob-3.svg" alt="" className='blob-3' />
      </div> */}

    </div>
  )
}

export default App
