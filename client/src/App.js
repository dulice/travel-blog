import Home from "./pages/Home";
import { Routes, Route, useLocation } from 'react-router-dom';
import SinglePost from "./pages/SinglePost";
import WritePost from "./pages/WritePost";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { AnimatePresence } from "framer-motion";
import Settings from "./pages/Settings";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector(state => state.auth.user);
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.key}>
        <Route path="/" element={ <Home /> } />
        <Route path="/posts/:id" element={ <SinglePost /> } />
        <Route path="/write" element={ user? <WritePost /> : <Login /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/register" element={ <Register /> } />
        <Route path="/settings" element={ <Settings /> } />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
