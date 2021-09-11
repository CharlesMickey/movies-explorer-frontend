export const BASE_URL = "https://api.charlesmickey.nomoredomains.rocks";

export const checkResponse = (response) => {
  return response.ok ? response.json() : Promise.reject(response.status);
};

const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

export const register = ({ name, password, email }) => {
  return fetch(`${BASE_URL}/signup`, {
    headers,
    method: "POST",
    credentials: "include",
    body: JSON.stringify({ name, password, email }),
  }).then((res) => checkResponse(res));
};

export const authorize = ({ password, email }) => {
  return fetch(`${BASE_URL}/signin`, {
    headers,
    method: "POST",
    credentials: "include",
    body: JSON.stringify({ password, email }),
  }).then((res) => checkResponse(res));
};

export const signOut = () => {
  return fetch(`${BASE_URL}/users/signout`, {
    method: "POST",
    credentials: "include",
  }).then((res) => checkResponse(res));
};
