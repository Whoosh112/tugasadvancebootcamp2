const guardianOfTheGalaxyVol3Picture = "/assets/assetgambar/assetgambarberanda/filmnya/guardianofthegalaxyvol3.png";
import { useState } from "react";

import "../filmComponents/filmobjectcss.css"
function GuardianOfTheGalaxyVol3(){
        const [isOpen, setIsOpen] = useState(false);
        const [favorite, setFavorite] = useState(false)
        const handleFavorite = () => {
            setFavorite(prevState => !prevState);
        }
     
        const title = "Guardian of The Galaxy Vol. 3"
    return(
        <>
        <div className="filmobject" onClick={() => setIsOpen(true)} style={{ backgroundImage:`url(${guardianOfTheGalaxyVol3Picture})`}}></div>
        {isOpen && (
            <div className="overlay">
                <div className="filmpopup">
                    <button className="closebigpicture" onClick={()=>setIsOpen(false)}>X</button>
                    <div className="bigpicture">
                        <img src={guardianOfTheGalaxyVol3Picture}/>
                        <div className="boxjudulfilm">
                            <div className="judul">{title}</div>
                            <div className="mulaifilm">
                                <button className="tombolmulai">Mulai</button>
                                <button className="tombolfavorit" onClick={handleFavorite}>{favorite ? "-" : "+"}</button>
                            </div>
                        </div>
                    </div>
                    <div className="keteranganfilm">
                        2021 8 episodes 16+ 
                        <br/>
                        Description for Movie Title 3.
                        <br/>
                        Cast: Cast Members 3
                        <br/>
                        Genre: Genre 3
                        <br/>
                        <button className="tombolclose" onClick={()=>setIsOpen(false)}>Close</button>
                    </div>
                </div>
            </div>
            )}
        </>
    )
}

export default GuardianOfTheGalaxyVol3