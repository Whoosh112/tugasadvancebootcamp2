import "../Components/cssComponents/inputbar.css";

function KataSandiLama({value, onChange, error}){
    return(
    <div className="inputbar">
        <label>Kata Sandi Lama</label>
        <br />
        {error && <p style={{ color: "red" }}>{error}</p>}
        <input type="password" id="katasandilama" name="katasandilama" placeholder="Masukkan Kata Sandi Lama" value={value}
        onChange={onChange}/>
    </div>
    );
}

export default KataSandiLama;
