export const optionsMain = {
  addressApi: " https://api.charlesmickey.nomoredomains.rocks",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
};

export const optionsMovies = {
  addressApi: " https://api.nomoreparties.co/beatfilm-movies",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
};

export const BASE_URL = "https://api.nomoreparties.co";

export const MESSAGE = {
  SUCCESSFUL_UPDATE: "Данные успешно обновлены!",
  FORM: {
    NAME: "Поле name содержит только латиницу, кириллицу, пробел или дефис.",
    EMAIL: "Введите Ваш действующий Email.",
  },
  ERROR: {
    400: "Введены некорректные данные.",
    401: "Вы ввели неправильный логин или пароль.",
    403: "У вас нет доступа к этому ресурсу",
    404: "Страница по указанному маршруту не найдена.",
    409: "Пользователь с таким Email уже существует.",
    500: "На сервере произошла ошибка.",
    DEFAULT:
      "Произошла ошибка. Возможно, проблема с соединением или сервер недоступен. ",
  },
};
