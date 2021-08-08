export const BASE_URL = "https://api.charlesmickey.nomoredomains.rocks";

export const checkResponse = (response) => {
  return response.ok
    ? response.json()
    : Promise.reject(
        new Error(`Ошибка ${response.status}: ${response.statusText}`)
      );
};

const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

export const register = ({ password, email }) => {
  return fetch(`${BASE_URL}/signup`, {
    headers,
    method: "POST",
    credentials: "include",
    body: JSON.stringify({ password, email }),
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
  return fetch(`${this._baseUrl}/users/signout`, {
    method: "DELETE",
    credentials: "include",
  }).then((res) => this._checkResponseData(res));
};

export const getContent = () => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    credentials: "include",
  }).then((res) => checkResponse(res));
};
