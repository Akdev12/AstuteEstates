import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Header from "./components/Header";
import PrivateRoute from "./components/PrivateRoute";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-Up" element={<SignUp />} />
        <Route path="/about" element={<About />} />
        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

// <Route path="/" element={<Home />} />
{
  /* <Route path="/sign-in" element={<SignIn />} />
<Route path="/sign-Out" element={<SignOut />} />
<Route path="/about" element={<About />} />
<Route path="/profile" element={<Profile />} /> */
}
// git config --global user.email "you@example.com"
//git config --global user.name "Your Name"
