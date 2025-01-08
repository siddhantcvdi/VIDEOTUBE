import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Sidebar from "./components/Sidebar";
function App() {
  return (
    <>
      {/* <Navbar /> */}
      <div className="flex h-screen overflow-hidden">
        {/* <Sidebar /> */}
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login/>} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
