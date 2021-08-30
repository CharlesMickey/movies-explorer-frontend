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

export const getSavedMovies = () => {
  return fetch(`${BASE_URL}/movies/`, {
    method: "GET",
    credentials: "include",
  }).then((res) => checkResponse(res));
};


export const getUserInfo = () => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    credentials: "include",
  }).then((res) => checkResponse(res));
};