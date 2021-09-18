import { MESSAGE } from "./constants";

function showErrorMsg(error) {
  let errorMessage;
  switch (error) {
    case 400:
      errorMessage = MESSAGE.ERROR[400];
      break;
    case 401:
      errorMessage = MESSAGE.ERROR[401];
      break;
    case 403:
      errorMessage = MESSAGE.ERROR[403];
      break;
    case 404:
      errorMessage = MESSAGE.ERROR[404];
      break;
    case 409:
      errorMessage = MESSAGE.ERROR[409];
      break;
    case 500:
      errorMessage = MESSAGE.ERROR[500];
      break;
    default:
      errorMessage = `${MESSAGE.ERROR.DEFAULT}Описание ошибки: ${error}.`;
  }

  return errorMessage;
}

export default showErrorMsg;
