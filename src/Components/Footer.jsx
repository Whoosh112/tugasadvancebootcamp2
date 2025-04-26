const logoChill = "/assets/assetgambar/logochill.png";
const chevronRight = "/assets/assetgambar/assetgambarberanda/chevron-right.png"

import "./cssComponents/footer.css"


function Footer (){
    return(
<>
        <div className="bagianfooter">
            <div className="bagiancopyright">
                <img src={logoChill} className="logochillfooter" alt="Logo"/>
                <p>@2023 Chill All Rights Reserved.</p>
            </div>
            <div className="genre">
                <div className="genreheader">
                    <p><b>Genre</b></p>
                    <div className="chevron"><img className="chevron" src={chevronRight}/></div>
                </div>
                <div className="listgenre">
                    <ul className="genre1">
                        <li>Aksi</li>
                        <li>Anak-anak</li>
                        <li>Anime</li>
                        <li>Britania</li>
                    </ul>
                    <ul className="genre2">
                        <li>Drama</li>
                        <li>Fantasi Ilmiah & Fantasi</li>
                        <li>Kejahatan</li>
                        <li>KDrama</li>
                    </ul>
                    <ul className="genre3">
                        <li>Komedi</li>
                        <li>Petualangan</li>
                        <li>Perang</li>
                        <li>Romantis</li>
                    </ul>
                    <ul className="genre4">
                        <li>Sains & Alam</li>
                        <li>Thriller</li>
                    </ul>
                </div>
            </div>
            <div className="bantuan">
                <div className="bantuanheader">
                    <p><b>Bantuan</b></p>
                    <div className="chevron"><img src={chevronRight}/></div>
                </div>
                <ul>
                    <li>FAQ</li>
                    <li>Kontak Kami</li>
                    <li>Privasi</li>
                    <li>Syarat & Ketentuan</li>
                </ul>
            </div>
    </div>
</>
    )
}

export default Footer;