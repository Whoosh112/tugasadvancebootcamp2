import "../Components/cssComponents/inputbar.css";

function KataSandiUlang({value, onChange}){
    return(
    <div className="inputbar">
        <label>Konfirmasi Kata Sandi</label>
        <input type="password" id="katasandiulang" name="katasandiulang" placeholder="Masukkan Kata Sandi"   value={value}
        onChange={onChange}/>
    </div>
    );
}

export default KataSandiUlang;
