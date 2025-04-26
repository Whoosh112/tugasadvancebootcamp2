import { Link } from "react-router-dom";
import "./cssComponents/masalahLogin.css"

function SudahPunyaAkun(){
    return (
  <div className="masalahlogin">
    <p>Sudah punya akun? <Link to="/login"><b>Masuk</b></Link></p>
  </div>
    )
}

export default SudahPunyaAkun;