const InformationOutline = "/assets/assetgambar/assetgambarberanda/information-outline.png";
const VolumeOff = "/assets/assetgambar/assetgambarberanda/volume-off.png";


import "./cssComponents/hero.css"

function Hero (){
    return (
        <div className="container" id="container">       
        <div className="box">
            <div className="isibox">
                <h1>Duty After School</h1>
                <p>Sebuah benda tak dikenal mengambil alih dunia. Dalam keputusasaan,
                    Departemen Pertahanan mulai merekrut lebih banyak tentara, termasuk
                    siswa sekolah menengah. Mereka pun segera menjadi
                    pejuang garis depan dalam perang. </p>
            </div>
            <div className="boxtombol">
                <div className="kiri">
                    <button type="button" className="mulai">Mulai</button>
                    <button type="button" className="selengkapnya"><img src={InformationOutline} width="25" height="25" alt="information-outline" className="information-outline"/>Selengkapnya</button>
                    <div className="batasusia">18+</div>
                </div>
                <div className="kanan">
                    <button type="button" ><img src={VolumeOff} alt="volume-off" className="volume-off"/></button>
                </div>
            </div>
        </div>
</div>
    )
}

export default Hero