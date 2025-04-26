import TheTomorrowWar from "./filmComponents/TheTomorrowWar";
import Quantumania from "./filmComponents/Quantumania";
import GuardianOfTheGalaxyVol3 from "./filmComponents/GuardianOfTheGalaxyVol3";
import AManCalledOtto from "./filmComponents/AManCalledOtto";
import TheLittleMermaid from "./filmComponents/TheLittleMermaid";
const TombolKiri = "/assets/assetgambar/assetgambarberanda/arrow-left.png";
const TombolKanan = "/assets/assetgambar/assetgambarberanda/arrow-right.png";

import "./cssComponents/film.css"


function FilmTrending () {
  const filmTrending = [<TheTomorrowWar key={0}/>, <Quantumania key={1}/>, <GuardianOfTheGalaxyVol3 key={2}/>, <AManCalledOtto key={3}/>, <TheLittleMermaid key={4}/>]

  return(
    <>
      <div className="arrayfilm">
        <div className="tombolkiri"><img src={TombolKiri}/></div>
        
          {filmTrending.map((film, index) => (
            <div key={index} className="filmwrapper">
              {film}
              {film && (
              <div className="top10">Top<br/>10</div>
              )}

          </div>
        ))}
        <div className="tombolkanan"><img src={TombolKanan}/></div>
          
    </div>
    </>

  )
}
export default FilmTrending