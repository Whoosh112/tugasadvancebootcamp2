const AllOfUsAreDeadLanjutPicture = "/assets/assetgambar/assetgambarberanda/allofusaredeadlanjut.png";
const Star = "/assets/assetgambar/assetgambarberanda/star.png";


import "../lanjutFilmComponents/filmlanjutobjectcss.css"
function AllOfUsAreDeadLanjut(){

     
    return(
        <>
        <div className="filmlanjutobject" style={{ backgroundImage:`linear-gradient(180deg, rgba(18,18,18,0), rgba(18,18,18,1)), url(${AllOfUsAreDeadLanjutPicture})`}}>
            <div className="namafilm">The Batman <div className="rating"><img src={Star} height ="16" width="16"/>4.2/5</div></div>

        </div>
        </>
    )
}

export default AllOfUsAreDeadLanjut