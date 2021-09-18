export const BASE_URL = "https://api.charlesmickey.nomoredomains.rocks";

export const checkResponse = (response) => {
  return response.ok ? response.json() : Promise.reject(response.status);
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

export const updateUserInfo = ({ name, email }) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "PATCH",
    headers,
    credentials: "include",
    body: JSON.stringify({ name, email }),
  }).then((res) => checkResponse(res));
};

export const deleteMovie = (movieId) => {
  return fetch(`${BASE_URL}/movies/${movieId}`, {
    method: "DELETE",
    headers,
    credentials: "include",
  }).then((res) => checkResponse(res));
};

export const createMovie = (movie) => {
  return fetch(`${BASE_URL}/movies`, {
    method: "POST",
    headers,
    credentials: "include",
    body: JSON.stringify({
      country: movie.country || "Нет данных",
      director: movie.director  || "Нет данных",
      duration: movie.duration  || 0,
      year: movie.year  || "Нет данных",
      description: movie.description  || "Нет данных",
      image: movie.image,
      trailer: movie.trailer  || "Нет данных",
      thumbnail: movie.thumbnail  || "Нет данных",
      movieId: movie.movieId,
      nameRU: movie.nameRU  || "Нет данных",
      nameEN: movie.nameEN  || "Нет данных",
    }),
  }).then((res) => checkResponse(res));
};
