import { Link } from "react-router-dom";

import "./cssComponents/masalahLogin.css"

function MasalahLogin(){
    return (
  <div className="masalahlogin">
    <p>Belum punya akun? <Link to="/"><b>Daftar</b></Link></p>
    <p>Lupa kata sandi?</p>
  </div>
    )
}

export default MasalahLogin;