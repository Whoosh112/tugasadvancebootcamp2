import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import LoginRegister from "../Components/LoginRegister";
import Username from "../Components/Username";
import KataSandi from "../Components/KataSandi";
import LoginButtonBox from "../Components/LoginButtonBox";
import MasalahLogin from "../Components/MasalahLogin";


const logoChill = "/assets/assetgambar/logochill.png";

import { getUserByUsername } from '../apihelper/userApi';
import "./cssPages/styleLogin.css"

function Login () {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {  
    if (!username || !password) {
      setError("Harap mengisi input dengan lengkap!");
      return;
    }
  
    try {
      const users = await getUserByUsername(username);
      const matchedUser = users.find(user => user.password === password);
      console.log("Update response:", users); 


      if (matchedUser) {
        localStorage.setItem("user", JSON.stringify(matchedUser));
        navigate("/beranda");
      } else {
        setError("Username atau password salah!");
      }
    } catch {
      setError("Terjadi kesalahan saat login.");
    }
  };

  useEffect(() => {
    document.body.classList.add("loginpage");

    return () => {
      document.body.classList.remove("loginpage");
    };
  }, []);

  return (
    <form className="loginscreen">
        <div className="logo">
          <img src={logoChill} className="logochillregister"/>
        </div>
        <div className="tempatjudul">
            <LoginRegister/>
        </div>
          <div className="username">
            <Username value={username} onChange={(e) => setUsername(e.target.value)} error={error}/>
          </div>
          <div className="katasandi">
           <KataSandi value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="masalahlogin">
            <MasalahLogin />             
          </div>
          <div className="loginbuttonbox">
            <LoginButtonBox onClick={(e) => {e.preventDefault(); handleLogin();}}/>
        </div>
    </form>
    )
};

export default Login;