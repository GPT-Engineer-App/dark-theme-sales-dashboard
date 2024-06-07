import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Login from "./pages/Login.jsx";
import { useEffect, useState } from "react";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("supabaseToken");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (token) => {
    localStorage.setItem("supabaseToken", token);
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("supabaseToken");
    setIsAuthenticated(false);
  };
  return (
    <Router>
      <Routes>
        {isAuthenticated ? <Route exact path="/" element={<Index onLogout={handleLogout} />} /> : <Route exact path="/login" element={<Login onLogin={handleLogin} />} />}
        <Route path="*" element={<Login onLogin={handleLogin} />} />
      </Routes>
    </Router>
  );
}

export default App;
