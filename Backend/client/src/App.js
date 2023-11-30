import "./App.css";
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector } from 'react-redux'

import ProtectedRoute from "./utils/protectedRoute";

import { Dashboard } from "./pages/CA/Dashboard";
import { Loader } from "./pages/components/Loader/Loader";
import Landing from "./pages/Windows/Landing";
import { Home as CaHome } from "./pages/CA/Home";
import { Register } from "./pages/CA/Register"
import { Login } from "./pages/CA/Login"
import { Events } from "./pages/Main/Event/Events";
import { Home } from "./pages/Main/Home/Home";
import { Faq } from "./pages/Main/Faq/Faq";
// import Navbar from "./pages/components/Navbar/Navbar";



function App() {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true);
  // const getuser = useSelector((state) => state.user).result;
  const getCaUser = useSelector((state) => state.ca).result;

  useEffect(() => {
    window.onload = () => {
      setLoading(false);
    };
    setTimeout(() => {
      if (loading) {
        setLoading(false);
      }
    }, 5000);
  }, []);
  return (
    <>
      {loading && <Loader />}
      {!loading && (
        <>
          {/* <Navbar/> */}
          <Routes>
            {/* <Route path="/" index element={<Landing />} /> */}
            {/* <Route path="home" index element={<Home />} />
            <Route path="faq" index element={<Faq />} /> */}
            <Route path="campus-ambassador" element={<CaHome />}>
              <Route path="register" element={<Register />}></Route>
              <Route path="login" element={<Login />}></Route>
            </Route>
              <Route path="campus-ambassador/dashboard" element={<ProtectedRoute isLoggedIn={Object.keys(getCaUser).length===0?false:true}/>}></Route>

            {/* <Route path="cultural-fest" element={"Main Page"}></Route> */}
            {/* <Route path="events" element={<Events/>}></Route> */}
            <Route path="*" element={<Navigate to="/campus-ambassador" />} />
          </Routes>
        </>
      )}
    </>
  );
}

export default App;
