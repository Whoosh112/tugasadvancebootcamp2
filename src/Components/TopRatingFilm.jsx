import Suzume from "../Components/filmComponents/Suzume";
import JurassicWorldDominion from "../Components/filmComponents/JurrasicWorldDominion";
import Sonic2 from "../Components/filmComponents/Sonic2";
import AllOfUsAreDead from "./filmComponents/AllOfUsAreDead";
import BigHero6 from "./filmComponents/BigHero6";
const TombolKiri = "../assets/assetgambar/assetgambarberanda/arrow-left.png";
const TombolKanan = "../assets/assetgambar/assetgambarberanda/arrow-right.png";

import "./cssComponents/film.css"


function TopRatingFilms () {
  const topRatingFilms = [<Suzume key={0}/>, <JurassicWorldDominion key={1} />, <Sonic2 key={2} />, <AllOfUsAreDead key={3} />, <BigHero6 key={4} />]

  return(
    <>
      <div className="arrayfilm">
        <div className="tombolkiri"><img src={TombolKiri}/></div>

        {topRatingFilms.map((film, index) => (
      <div key={index} className="filmwrapper">

          {film}
          {[0, 3].includes(index) && <div className="episodebarufilm">Episode Baru</div>}

      </div>
    ))}

          <div className="tombolkanan"><img src={TombolKanan}/></div>
    </div>
    </>

  )
}
export default TopRatingFilms