import { useEffect } from "react";

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";


import "./cssPages/styleFavorit.css"
import { getUserByUsername, deleteUser } from '../apihelper/userApi';

function Favorit ({onLogout}) {
const user = JSON.parse(localStorage.getItem("user"));

// const [listFavorit, setListFavorit] = useState([])

const handleDelete = async () => {

  try {
    const users = await getUserByUsername(user.username);
    const matchedUser = users.find(u => u.password === user.password);

    if (matchedUser) {
      await deleteUser(matchedUser.id);
      alert("Akun berhasil dihapus.");
      localStorage.removeItem("user");
    } 
  } catch {
    alert("Terjadi kesalahan saat menghapus akun.");
  }
};

useEffect(() => {
        document.body.classList.add("favoritpage");
    
        return () => {
          document.body.classList.remove("favoritpage");
        };
      }, []);

return (
    <>
    <div className="beranda">
      <div className="navbar">
          <Navbar user={user} onLogout={onLogout} onDelete={handleDelete}/>
      </div>
      <div className="favoritarray">
        
      </div>
      <div className="footer">
            <Footer />
        </div>
    </div>
    </>
    )
};

export default Favorit;