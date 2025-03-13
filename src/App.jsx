
import './App.css'
import Home from './components/pages/Home.jsx'
import TruckBurger from './components/pages/TruckBurger.jsx'
import MySpace from './components/pages/MySpace.jsx'
import ASLingo from './components/pages/ASLingo.jsx'
import Gallery from './components/pages/Gallery.jsx'
import PersistentLayout from './components/pages/PersistentLayout.jsx'
import ScrollToTop from './components/templates/ScrollToTop.jsx'
import { Routes, Route } from "react-router-dom";


function App() {


  return (


<>
<ScrollToTop />
      <Routes>

        <Route path="/" element={<PersistentLayout />}>
          <Route index element={<Home />} />
          <Route path="aslingo" element={<ASLingo />} />
          <Route path="truckburger" element={<TruckBurger />} />
          <Route path="myspace" element={<MySpace />} />
          <Route path="gallery" element={<Gallery />} />

        </Route>
      </Routes>
  
      </>

  );
};

export default App

