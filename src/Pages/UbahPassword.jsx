import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


import KataSandi from "../Components/KataSandi";
import KataSandiLama from "../Components/KataSandiLama";
import GantiPasswordBox from "../Components/GantiPasswordBox";
import KataSandiUlang from "../Components/KataSandiUlang";

import { updateUser, getUserByUsername } from '../apihelper/userApi'; 
import "./cssPages/styleRegister.css"


function UbahPassword ({onLogout}) {
  const [newPassword, setNewPassword] = useState("");
  const [oldPassword, setOldPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChangePassword = async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const existingUsers = await getUserByUsername(user.username);
    const loggedUser = existingUsers.find(u => u.id === user.id);

    if (!oldPassword || !newPassword || !confirmPassword) {
      setError("Semua input harus diisi!");
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("Password tidak sama!");
      return;
    }

    try {
      if (loggedUser.password !== oldPassword) {
        setError("Password lama salah!");
        return;
      }

      await updateUser(loggedUser.id, { password: newPassword });
      localStorage.setItem("user", JSON.stringify({ ...loggedUser, password: newPassword }));
      alert("Password berhasil diubah!");
      onLogout();
      navigate("/login");
    } catch {
      setError("Terjadi kesalahan saat mengubah password.");
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
          <p>Ganti Passwordmu</p>
          <div className="katasandilama">
           <KataSandiLama value={oldPassword} onChange={(e) => setOldPassword(e.target.value)} error={error}/>
          </div>
          <div className="katasandibaru">
           <KataSandi value={newPassword} onChange={(e) => setNewPassword(e.target.value)}/>
          </div>
          <div className="katasandibaruulang">
           <KataSandiUlang value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}
           />
          </div>
          <div className="loginbuttonbox">
            <GantiPasswordBox onClick={(e) => {e.preventDefault(); handleChangePassword();}}/>
        </div>
  </form>
        )
};

export default UbahPassword;