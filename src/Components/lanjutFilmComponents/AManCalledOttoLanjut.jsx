const AManCalledOttoLanjutPicture = "/assets/assetgambar/assetgambarberanda/amancalledottolanjut.png";
const Star = "/assets/assetgambar/assetgambarberanda/star.png";


import "../lanjutFilmComponents/filmlanjutobjectcss.css"
function AManCalledOttoLanjut(){

     
    return(
        <>
        <div className="filmlanjutobject" style={{ backgroundImage:`linear-gradient(180deg, rgba(18,18,18,0), rgba(18,18,18,1)), url(${AManCalledOttoLanjutPicture})`}}>
            <div className="namafilm">A Man Called Otto                 <div className="rating"><img src={Star} height ="16" width="16"/>4.4/5</div></div>
            </div>

        </>
    )
}

export default AManCalledOttoLanjut

