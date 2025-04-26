import { useNavigate } from "react-router-dom";

import "./cssComponents/loginButtonBox.css"

function GantiPasswordBox({onClick}){
  const navigate = useNavigate();

    return (
      <div className="loginbuttonbox">
        <button className="loginconfirm" type="submit" onClick={onClick}>Ganti Password</button>
        <p>Atau</p>
        <button className="loginconfirmgoogle" type="button" onClick={() => navigate("/beranda")}> Kembali ke Beranda</button>
      </div>
    )
}

export default GantiPasswordBox;
