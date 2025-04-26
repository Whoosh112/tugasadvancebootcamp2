import { BASE_URL } from './config';

export const getUsers = async () => {
  const res = await fetch(`${BASE_URL}/usersdata`);
  return res.json();
};

export const getUserByUsername = async (username) => {
  const res = await fetch(`${BASE_URL}/usersdata?username=${username}`);
  if (!res.ok) {
    return [];
  }
  const data = await res.json();
  if (!Array.isArray(data)) {
    return []; 
  }
  return data;
};

export const addUser = async (userData) => {
  const res = await fetch(`${BASE_URL}/usersdata`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData),
  });
  return res.json();
};

export const updateUser = async (id, updates) => {
  const res = await fetch(`${BASE_URL}/usersdata/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updates),
  });
  return res.json();
};

export const deleteUser = async (id) => {
  const res = await fetch(`${BASE_URL}/usersdata/${id}`, {
    method: 'DELETE',
  });
  return res.json();
};