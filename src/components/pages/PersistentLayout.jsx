import { Outlet } from "react-router-dom";
import Header from "../organisms/Header.jsx";
import Footer from "../organisms/Footer.jsx";

const PersistentLayout = () => {
  return (
    <div>
        <Header path="/"/>
      <Outlet /> {/* Mantiene las páginas dentro sin desmontar Header/Sidebar */}
      <Footer path="/"/>
    </div>
  );
};

export default PersistentLayout;
