const DontLookUpLanjutPicture = "/assets/assetgambar/assetgambarberanda/dontlookuplanjut.png";
const Star = "/assets/assetgambar/assetgambarberanda/star.png";


import "../lanjutFilmComponents/filmlanjutobjectcss.css"
function DontLookUpLanjut(){

     
    return(
        <>
        <div className="filmlanjutobject" style={{ backgroundImage:`linear-gradient(180deg, rgba(18,18,18,0), rgba(18,18,18,1)), url(${DontLookUpLanjutPicture})`}}>
            <div className="namafilm">
                <div className="namafilmtext">Don&apos;t Look Up</div>
                <div className="rating"><img src={Star} height ="16" width="16"/>4.5/5</div></div>
        </div>
        </>
    )
}

export default DontLookUpLanjut