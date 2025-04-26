import "../Components/cssComponents/inputbar.css";

function Username({value, onChange, error}){
    return(
    <div className="inputbar">
        {error && <p className="errortext" style={{ color: "red" }}>{error}</p>}
        <label>Username</label>
        <input type="text" id="username" name="username" placeholder="Masukkan Username" value={value}
        onChange={onChange}/>
    </div>
    );
}

export default Username;