import TheLittleMermaid from "./filmComponents/TheLittleMermaid";
import DutyAfterSchool from "./filmComponents/DutyAfterSchool";
import BigHero6 from "./filmComponents/BigHero6";
import AllOfUsAreDead from "./filmComponents/AllOfUsAreDead";
import Missing from "./filmComponents/Missing";
const TombolKiri = "/assets/assetgambar/assetgambarberanda/arrow-left.png";
const TombolKanan = "/assets/assetgambar/assetgambarberanda/arrow-right.png";

import "./cssComponents/film.css"



function RilisBaru () {
  const rilisBaru = [<TheLittleMermaid key={0}/>, <DutyAfterSchool key={1}/>, <BigHero6 key={2}/>, <AllOfUsAreDead key={3}/>, <Missing key={4}/>]

  return(
    <>
      <div className="arrayfilm">
        <div className="tombolkiri"><img src={TombolKiri}/></div>
        
        {rilisBaru.map((film, index) => (
            <div key={index} className="filmwrapper">
              {film}
              {index == 0 && (
              <div className="top10">Top<br/>10</div>
              )}

              {[1, 3].includes(index) &&  (
              <div className="episodebarufilm">Episode Baru</div>
            )}
          </div>
        ))}
        <div className="tombolkanan"><img src={TombolKanan}/></div>
    </div>
    </>

  )
}
export default RilisBaru