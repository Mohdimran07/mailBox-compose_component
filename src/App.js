import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <div className="App">
      
       <Routes>
         <Route path="/signup" element={<Signup />} />
         <Route path="/login" element={<Login />} />
         <Route path="/" element={<Dashboard />} />
       </Routes>
      
      
    </div>
  );
}

export default App;
