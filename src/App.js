import "./App.css";
import { Routes, Route, Navigate} from "react-router-dom";
import LoginPage from "./pages/login";
import Register from "./pages/register";
import HomePage from "./pages/homePage";
import { useState } from "react";
//import AuthProvider from "./context/userContext"

function App() {


  const [user, setUser] = useState([])
  
  return (
    //<AuthProvider>

    <Routes>
      <Route
        path="/login"
        element={
          <div className="App">
            <LoginPage setUser={setUser} user={user}/>
          </div>
        }
      />

      <Route
        path="/register"
        element={
          <div className="App">
            <Register/>
          </div>
        }
      />

      
      <Route
        path="/homepage"
        element={
          <div className="App">
            <HomePage user={user} setUser={setUser}/>
          </div>
        }
      />

      <Route path="*" element={<Navigate replace to="/login" />} />
    </Routes>

    //</AuthProvider>
  );
}

export default App;
