const BlueLockLanjutPicture = "/assets/assetgambar/assetgambarberanda/bluelocklanjut.png";
const Star = "/assets/assetgambar/assetgambarberanda/star.png";


import "../lanjutFilmComponents/filmlanjutobjectcss.css"
function BlueLockLanjut(){
    return(
        <>
        <div className="filmlanjutobject" style={{ backgroundImage:`linear-gradient(180deg, rgba(18,18,18,0), rgba(18,18,18,1)), url(${BlueLockLanjutPicture})`}}>
            <div className="namafilm">Blue Lock<div className="rating"><img src={Star} height ="16" width="16"/>4.6/5</div></div>
        </div>

        </>
    )
}

export default BlueLockLanjut