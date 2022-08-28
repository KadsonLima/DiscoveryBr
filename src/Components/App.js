import StyledGlobal from "../Styles/StyledGlobal";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import {Home} from "./Pages/Home";
import Navbar from "./Layout/Navbar";
import Footer from "./Layout/Footer";

function App() {
  return (
    <BrowserRouter>
      <StyledGlobal />
      <Navbar/>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Footer/>
    </BrowserRouter>
  );
}

export default App;
