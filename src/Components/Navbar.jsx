const logoChill = "/assets/assetgambar/logochill.png";
const logoChillKecil = "/assets/assetgambar/logochillkecil.png";
const avatar = "/assets/assetgambar/assetgambarberanda/avatar.png";
const keyboardarrowdown = "/assets/assetgambar/assetgambarberanda/KeyboardArrowDown.png";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./cssComponents/navbar.css"


function Navbar({onLogout, onDelete}){
    const navigate = useNavigate();
    const [optionDown, setOptionDown] = useState(false)
    const handleOptionDown = () => {
        setOptionDown(prevState => !prevState);
    }

    const confirmLogout = () => { navigate("/login");} 


    return (
    <>
        <nav className="navbar">
            <ul>
                <img src={logoChill} className="logochill"/>
                <img src={logoChillKecil} className="logochillkecil"/>
                <li>Series</li>
                <li>Film</li>
                <li>Daftar Saya</li>
            </ul>
            <div className="profile">
                <img src={avatar} alt="avatar" className="avatar"/>
                <div className="optionbar" onClick={handleOptionDown}>
                    <img src={keyboardarrowdown} width="25" height="25" alt="KeyboardArrowDown" className="KeyboardArrowDown"/>
                    {optionDown && 
                        <div className="optiondownbox">
                            <div className="profileoption">Profil</div>
                            <div className="ubahkepremiumoption">Ubah Ke Premium</div>
                            <div className="keluaroption" onClick={() => {onLogout(); confirmLogout();}}>Keluar</div>
                            <div className="gantipassword" onClick={() => navigate("/ubahpassword")}>Ganti Password</div>
                            <div className="hapusoption" onClick={() => {onDelete(); confirmLogout();}}>Hapus</div>
                        </div>
                            }
                </div>
            </div>
        </nav>
    </>
    )
}

export default Navbar