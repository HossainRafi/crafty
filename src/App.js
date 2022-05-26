import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Dashboard from "./pages/Dashboard/Dashboard";
import Blogs from "./pages/Blogs/Blogs";
import Navbar from "./pages/Shared/Navbar";
import Error from "./pages/Shared/Error";
import Login from "./pages/Account/Login";
import Signup from "./pages/Account/Signup";
import Footer from "./pages/Shared/Footer";
import Purchase from "./pages/Purchase/Purchase";
import RequireAuth from "./pages/Account/RequireAuth";
import MyProfile from "./pages/Dashboard/MyProfile";
import MyOrder from "./pages/Dashboard/MyOrder";
import MyReview from "./pages/Dashboard/MyReview";
import Portfolio from "./pages/Portfolio/Portfolio";
import AddItem from "./pages/Dashboard/AddItem";
import AllItem from "./pages/Dashboard/AllItem";
import AllOrder from "./pages/Dashboard/AllOrder";
import MakeAdmin from "./pages/Dashboard/MakeAdmin";

function App() {
  return (
    <div className="bg-gray-200">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route
          path="/purchase/:id"
          element={
            <RequireAuth>
              <Purchase />
            </RequireAuth>
          }
        />
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<MyProfile />} />
          <Route path="myorder" element={<MyOrder />} />
          <Route path="myreview" element={<MyReview />} />
          <Route path="additem" element={<AddItem />} />
          <Route path="allitem" element={<AllItem />} />
          <Route path="allorder" element={<AllOrder />} />
          <Route path="makeadmin" element={<MakeAdmin />} />
        </Route>

        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
