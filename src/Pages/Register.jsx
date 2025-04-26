import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


import Username from "../Components/Username";
import KataSandi from "../Components/KataSandi";
import SudahPunyaAkun from "../Components/SudahPunyaAkun";
import LoginButtonBox from "../Components/LoginButtonBox";
import KataSandiUlang from "../Components/KataSandiUlang";
import WelcomeRegister from "../Components/WelcomeRegister";

const logoChill = "/assets/assetgambar/logochill.png";

import { addUser, getUserByUsername } from '../apihelper/userApi'; 
import "./cssPages/styleRegister.css"


function Register () {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    if (!username || !password || !confirmPassword) {
      setError("Semua input harus diisi!");
      return;
    }

    if (password !== confirmPassword) {
      setError("Password tidak sama!");
      return;
    }

    try {
      const existingUsers = await getUserByUsername(username);
      if (existingUsers.length > 0) {
        setError("Username sudah digunakan!");
        return;
      }
  
      await addUser({ username, password });
      alert("Registrasi berhasil! Kamu sekarang bisa masuk.");
      navigate("/login");
    } catch {
      setError("Terjadi kesalahan saat registrasi.");
    }
  };

  useEffect(() => {
    document.body.classList.add("registerpage");

    return () => {
      document.body.classList.remove("registerpage");
    };
  }, []);
  
  return (
    <form className="registerscreen">
          <div className="logo">
            <img src={logoChill} className="logochillregister"/>
          </div>
          <div className="tempatjudul">
            <WelcomeRegister/>
          </div>
            <div className="username">
              <Username value={username} onChange={(e) => setUsername(e.target.value)} error={error}/>
            </div>
            <div className="katasandi">
             <KataSandi value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <div className="katasandiulang">
             <KataSandiUlang value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}
             />
            </div>
            <div className="masalahlogin">
              <SudahPunyaAkun />
            </div>
            <div className="loginbuttonbox">
              <LoginButtonBox onClick={(e) => {e.preventDefault(); handleRegister()}}/>
          </div>
    </form>
          )
  };
  
  export default Register;