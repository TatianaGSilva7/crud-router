
import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
//importação dos componentes 'pages'
import Login from "./pages/Login/Login";
import Cadastro from './pages/Cadastro/Cadastro';
import Lista from "./pages/Lista/Lista";
import Home from "./pages/Home/Home";

import NavBar from "./components/Navbar/Navbar"

function App(){
  const {isAuthenticated, setAuthenticated} = useState(false);
  const [contacts, setContacts] = useState([]);

  //funçãomde autenticação
  const handleLogin = (username, password) =>{
    if(username === "admin" && password ==="123"){
      setAuthenticated(true);
    }else{
      alert("Usuário ou senha inválidos!")
    }
  }

  const handleLogout=() =>{
    setAuthenticated(false);
  }

  return (
    <Router>
      {isAuthenticated && <NavBar onLogout={handleLogout}></NavBar>}
      <Routes>

        <Route
         path="/login" 
         element={isAuthenticated ? <Navigate to ="/"/>:<Login onLogin={handleLogin}/>}></Route>

        <Route
         path="/" 
         element={isAuthenticated ? <Home to ="/"/>:<Login onLogin={handleLogin} />}></Route>

        <Route 
        path="/cadastro" 
        element={isAuthenticated ? <Cadastro to ="/"/>:<Login onLogin={handleLogin}/>}></Route>

        <Route 
        path="/lista" 
        element={isAuthenticated ?<Lista to ="/"/>:<Login onLogin={handleLogin}/>}></Route>

        <Route
         path="*" 
         element={isAuthenticated ?<Login to ="/"/>:<Login onLogin={handleLogin}/>}> </Route>
        
        </Routes>
    </Router>
  );
}
export default App;

