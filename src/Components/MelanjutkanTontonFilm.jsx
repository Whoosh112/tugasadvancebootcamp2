import AllOfUsAreDeadLanjut from "./lanjutFilmComponents/AllOfUsAreDeadLanjut";
import AManCalledOttoLanjut from "./lanjutFilmComponents/AManCalledOttoLanjut";
import BlueLockLanjut from "./lanjutFilmComponents/BlueLockLanjut";
import DontLookUpLanjut from "./lanjutFilmComponents/DontLookUpLanjut";
const TombolKiri = "/assets/assetgambar/assetgambarberanda/arrow-left.png";
const TombolKanan = "/assets/assetgambar/assetgambarberanda/arrow-right.png";


import "./cssComponents/melanjutkanTontonFilm.css"


function MelanjutkanTontonFilm () {
  const films = [<DontLookUpLanjut key={0}/>, <AllOfUsAreDeadLanjut key={1}/>, <BlueLockLanjut key={2}/>, <AManCalledOttoLanjut key={3}/>]

    return(
      <>

      <div className="lanjutfilm">
        <div className="tombolkiri"><img src={TombolKiri}/></div>
        {films.map((film, index) => (

            <div key={index} className="filmwrapperlanjut">
              {film}
              {index === 2 && (
                <div className="episodebarufilmbluelock"> Episode Baru</div>
          )}

            </div>

        ))}
        <div className="tombolkanan"><img src={TombolKanan}/></div>
      </div>

      </>

    )
}

export default MelanjutkanTontonFilm