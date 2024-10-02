import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ListUsers from "./pages/ListUsers";
import DetailUser from "./pages/DetailUser";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/list-users" element={<ListUsers />} />
        <Route path="/user/:userId" element={<DetailUser />} />{" "}
      </Routes>
    </Router>
  );
}

export default App;
