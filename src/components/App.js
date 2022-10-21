import Layout from "./Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Quiz from "./pages/Quiz";
import Signup from "./pages/Signup";
import "./style/App.css";

function App() {
  return (
    <Layout>
      {/* <Home /> */}
      {/* <Signup /> */}
      {/* <Login /> */}
      <Quiz />
    </Layout>
  );
}

export default App;
