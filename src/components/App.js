import { Route, Routes } from "react-router-dom";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";

import "./style/App.css";
import { AuthProvider } from "../contexts/AuthContext";
import ProvideRoute from "../authentication/ProvideRoute";

function App() {
  return (
    <>
      <AuthProvider>
        <Navbar />
        <main className="main">
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route
                path="/quiz"
                element={
                  <ProvideRoute>
                    <Quiz />
                  </ProvideRoute>
                }
              />
              <Route
                path="/result"
                element={
                  <ProvideRoute>
                    <Result />
                  </ProvideRoute>
                }
              />
            </Routes>
          </div>
        </main>
        <Footer />
      </AuthProvider>
    </>
  );
}

export default App;
