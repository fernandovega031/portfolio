
import './App.css'
import Home from './components/pages/Home.jsx'
import TruckBurger from './components/pages/TruckBurger.jsx'
import MySpace from './components/pages/MySpace.jsx'
import ASLingo from './components/pages/ASLingo.jsx'
import PersistentLayout from './components/pages/PersistentLayout.jsx'
import ScrollToTop from './components/templates/ScrollToTop.jsx'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {


  return (

    <>
  <ScrollToTop />
      <Routes basename={process.env.PUBLIC_URL}>
        <Route path="/" element={<PersistentLayout />}>
          <Route index element={<Home />} />
          <Route path="ASLingo" element={<ASLingo />} />
          <Route path="truckburger" element={<TruckBurger />} />
          <Route path="myspace" element={<MySpace />} />
        </Route>
      </Routes>
  
  
    </>

  )
}

export default App

