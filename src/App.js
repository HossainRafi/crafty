import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Dashboard from "./pages/Dashboard/Dashboard";
import Blogs from "./pages/Blogs/Blogs";
import Portfolio from "./pages/Portfolio/Portfolio";
import Navbar from "./pages/Shared/Navbar";
import Error from "./pages/Shared/Error";
import Login from './pages/Account/Login';
import Signup from './pages/Account/Signup';
import Footer from "./pages/Shared/Footer";
import Purchase from './pages/Purchase/Purchase';

function App() {
  return (
    <div className="bg-gray-200">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/purchase/:id" element={<Purchase />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
