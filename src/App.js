import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Dashboard from "./pages/Dashboard/Dashboard";
import Blogs from "./pages/Blogs/Blogs";
import Portfolio from "./pages/Portfolio/Portfolio";
import Navbar from "./pages/Shared/Navbar";
import Error from "./pages/Shared/Error";
import Login from './pages/Account/Login';
import Signup from './pages/Account/Signup';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
