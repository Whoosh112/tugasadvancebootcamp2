import "../Components/cssComponents/inputbar.css";

function KataSandi({value, onChange}){
    return(
    <div className="inputbar">
        <label>Kata Sandi</label>
        <input type="password" id="katasandi" name="katasandi" placeholder="Masukkan Kata Sandi"   value={value}
        onChange={onChange}/>
    </div>
    );
}

export default KataSandi;
