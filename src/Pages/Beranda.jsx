import { useEffect } from "react";


import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import MelanjutkanTontonFilm from "../Components/MelanjutkanTontonFilm";
import TopRatingFilm from "../Components/TopRatingFilm";
import FilmTrending from "../Components/FilmTrending";
import RilisBaru from "../Components/RilisBaru";
import Footer from "../Components/Footer";

import { getUserByUsername, deleteUser } from '../apihelper/userApi';
import "./cssPages/styleBeranda.css"

function Beranda ({onLogout}) {
const user = JSON.parse(localStorage.getItem("user"));

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
        document.body.classList.add("berandapage");
    
        return () => {
          document.body.classList.remove("berandapage");
        };
      }, []);

      return (
        <>
        <div className="beranda">
          <div className="navibar">
              <Navbar onLogout={onLogout} onDelete={handleDelete}/>
          </div>
          <div className="hero">
              <Hero />
          </div>
          <div className="kotakfilm">
            <div className="melanjutkantontonfilm">
                <p>Melanjutkan Tonton Film</p>
                <MelanjutkanTontonFilm />
            </div>
            <div className="tempatfilm1">
                <p>Top Rating Film Dan Series Hari Ini</p>
                <TopRatingFilm />
            </div>
            <div className="tempatfilm2">
                <p>Film Trending</p>
                <FilmTrending />
            </div>
            <div className="tempatfilm3">
                <p>Rilis Baru</p>
                <RilisBaru />
            </div>
          </div>
          <div className="footer">
                <Footer />
            </div>
        </div>
        </>
        )
    };
    
    export default Beranda;