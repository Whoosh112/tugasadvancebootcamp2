import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers, addUser, updateUser, deleteUser } from "../apihelper/userApi";
import { setData, addData, updateData, deleteData } from "../store/redux/dataSlice";

import "./cssPages/styleListView.css"

const ListView = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.data.items);

  const [formData, setFormData] = useState({ username: "", password: "" });
  const [editUser, setEditUser] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getUsers();
      dispatch(setData(data));
    };
    fetchData();
  }, [dispatch]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editUser) {
      const updated = await updateUser(editUser.id, formData);
      dispatch(updateData(updated));
    } else {
      const newUser = await addUser(formData);
      dispatch(addData(newUser));
    }
    setFormData({ username: "", password:"" });
    setEditUser(false);
  };

  const handleDelete = async (id) => {
    await deleteUser(id);
    dispatch(deleteData(id));
  };

  return (
    <div>
      <h2>Daftar Pengguna</h2>
      <table className="usertable-form">
          <thead>
            <tr>
              <th>Username</th>
              <th>Password</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          {users.map((user) => (
          <tbody key={user.id} className="usertable-list">
              <td>{user.username}</td>
              <td>{user.password}</td>
              <td><button className="tomboltable" onClick={() => { setEditUser(user); setFormData({ username: user.username, password: user.password })}}>Edit</button></td>
              <td><button className="tomboltable" onClick={() => handleDelete(user.id)}>Delete</button></td>
          </tbody>
        ))}
        </table>

      <h3>{editUser ? "Edit Pengguna" : "Tambah Pengguna"}</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" value={formData.username} onChange={(e) => setFormData({ ...formData, username: e.target.value })} placeholder="Username" required/>
        <input type="text" value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} placeholder="Password" required/>
        <button  className="tombolsubmit" type="submit">{editUser ? "Update" : "Add"}</button>
        {editUser && (
          <button className="tombolcancel" type="button" onClick={() => { setEditUser(null); setFormData({ username: "", password: "" })}}> Cancel</button>
        )}
      </form>
    </div>
  );
};

export default ListView;