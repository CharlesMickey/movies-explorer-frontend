export const BASE_URL = "https://api.nomoreparties.co/beatfilm-movies";

export const checkResponse = (response) => {
  return response.ok
    ? response.json()
    : Promise.reject(
        new Error(`Ошибка ${response.status}: ${response.statusText}`)
      );
};

export const getMovies = () => {
  return fetch(`${BASE_URL}`, {
    method: "GET",
  }).then((res) => checkResponse(res));
};
