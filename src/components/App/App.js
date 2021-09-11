import React from "react";
import { Route, Switch, useHistory, Redirect } from "react-router-dom";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import Login from "../Login/Login";
import * as apiAuth from "../../utils/apiAuth.js";
import * as MoviesApi from "../../utils/MoviesApi";
import * as MainApi from "../../utils/MainApi";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import NotFound from "../NotFound/NotFound";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import SavedMovies from "../SavedMovies/SavedMovies";
import InfoTooltip from "../InfoTooltip/InfoTooltip";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import filterMovies from "../../utils/filterMovies";
import { BASE_URL } from "../../utils/constants";
import GetResize from "../../utils/GetResize";
import getNumberMoviesRender from "../../utils/getNumberMoviesRender";
import showErrorMsg from "../../utils/showErrorMsg";
import { MESSAGE } from "../../utils/constants";

function App() {
  const history = useHistory();
  let width = GetResize();
  const [isLoggedIn, setIsLoggedIn] = React.useState(undefined);
  const [isOpenBurger, setIsOpenBurger] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});

  const [showMovies, setShowMovies] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isShortMovies, setIsShortMovies] = React.useState(false);

  const [isNotFound, setIsNotFound] = React.useState(false);

  const [isNumberOfMoviesToRender, setIsNumberOfMoviesToRender] =
    React.useState(0);
  const [isNumberOfMoviesToAdd, setIsNumberOfMoviesToAdd] = React.useState(0);

  const [isInfoTooltip, setInfoTooltip] = React.useState(false);
  const [isInfoTooltipOk, setInfoTooltipOk] = React.useState(false);
  const [isMessageForUser, setMessageForUser] = React.useState("");

  function getMessageForUser(err) {
    setInfoTooltipOk(false);
    setInfoTooltip(true);
    setMessageForUser(showErrorMsg(err));
  }

  function getUserInfo() {
    return MainApi.getUserInfo()
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((err) => {
        getMessageForUser(err);
        console.log(`${err}`);
      });
  }

  React.useEffect(() => {
    setIsLoading(true);
    if (localStorage.loggedIn === "true") {
      return MainApi.getUserInfo()
        .then((res) => {
          setCurrentUser(res);
        })
        .catch((err) => {
          getMessageForUser(err);
          console.log(`${err}`);
        })
        .finally(() => setIsLoading(false));
    } else {
      setIsLoading(false);
    }
  }, []);

  function onLogin({ email, password }) {
    setIsLoading(true);
    return apiAuth
      .authorize({ email, password })
      .then((res) => {
        localStorage.setItem("loggedIn", "true");
        getUserInfo();
        setIsLoggedIn(true);
        history.push("/movies");
      })
      .catch((err) => {
        getMessageForUser(err);
        console.log(`${err}`);
      })
      .finally(() => setIsLoading(false));
  }

  function deleteData() {
    setIsLoggedIn(false);
    localStorage.clear();
    sessionStorage.clear();
  }

  React.useEffect(() => {
    if (localStorage.loggedIn === "true") {
      setIsLoggedIn(true);
      localStorage.setItem("loggedIn", "true");
    } else {
      deleteData();
    }
  }, [isLoggedIn]);

  function updateUserInfo({ name, email }) {
    return MainApi.updateUserInfo({ name, email })
      .then((res) => {
        setInfoTooltipOk(true);
        setInfoTooltip(true);
        setMessageForUser(MESSAGE.SUCCESSFUL_UPDATE);
        setCurrentUser(res);
      })
      .catch((err) => {
        getMessageForUser(err);
        console.log(`${err}`);
      });
  }

  function register({ name, email, password }) {
    setIsLoading(true);
    return apiAuth
      .register({ name, email, password })
      .then(() => {
        onLogin({ email, password });
      })
      .catch((err) => {
        getMessageForUser(err);
        console.log(`${err}`);
      })
      .finally(() => setIsLoading(false));
  }

  function signOut() {
    setIsLoading(true);
    return apiAuth
      .signOut()
      .then((res) => {
        deleteData();
        history.push("/");
      })
      .catch((err) => {
        getMessageForUser(err);
        console.log(`${err}`);
      })
      .finally(() => setIsLoading(false));
  }

  React.useEffect(() => {
    if (!localStorage.movies) {
      return MoviesApi.getMovies()
        .then((res) => {
          const movies = res.map((movie) => {
            return { ...movie, img: `${BASE_URL}${movie.image.url}` };
          });
          localStorage.setItem("movies", JSON.stringify(movies));
        })
        .catch((err) => {
          getMessageForUser(err);
          console.log(`${err}`);
        });
    }
  }, [isLoggedIn]);

  function notFoundMovies(filteredMovies) {
    if (!filteredMovies.length) {
      setIsNotFound(true);
    } else {
      setIsNotFound(false);
    }
  }

  function handleSearchForMovies(req) {
    const filteredMovies = filterMovies(
      JSON.parse(localStorage.movies),
      req,
      isShortMovies
    );
    notFoundMovies(filteredMovies);

    return setShowMovies(filteredMovies);
  }

  React.useEffect(() => {
    if (localStorage.movies && sessionStorage.request) {
      const filteredMovies = filterMovies(
        JSON.parse(localStorage.movies),
        sessionStorage.request,
        isShortMovies
      );
      notFoundMovies(filteredMovies);
      return setShowMovies(filteredMovies);
    }
    return;
  }, [isShortMovies]);

  React.useEffect(() => {
    const { numberOfMoviesToRender, numberOfMoviesToAdd } =
      getNumberMoviesRender(width);

    setIsNumberOfMoviesToAdd(numberOfMoviesToAdd);
    setIsNumberOfMoviesToRender(numberOfMoviesToRender);
  }, [width, isShortMovies]);

  function handelOpenBurger() {
    setIsOpenBurger(true);
  }

  function closeAllPopups() {
    setIsOpenBurger(false);
    setInfoTooltip(false);
  }

  function closeBurgerClickOnOverlay(e) {
    if (e.target.matches(".burger-menu") || e.target.matches(".popup")) {
      closeAllPopups();
    }
  }

  function closeBurgerEsc(e) {
    if (e.key === "Escape") {
      closeAllPopups();
    }
  }

  function handelChangeCheckbox() {
    setIsShortMovies(!isShortMovies);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div
        className="app"
        onClick={closeBurgerClickOnOverlay}
        tabIndex="0"
        onKeyDown={closeBurgerEsc}
      >
        <Switch>
          <Route exact path="/">
            <Main isLoggedIn={isLoggedIn} handelOpenBurger={handelOpenBurger} />
          </Route>
          <Route path="/signin">
            {isLoggedIn ? (
              <Redirect to="/movies" />
            ) : (
              <Login isLoading={isLoading} onLogin={onLogin} />
            )}
          </Route>
          <Route path="/signup">
            {isLoggedIn ? (
              <Redirect to="/movies" />
            ) : (
              <Register isLoading={isLoading} register={register} />
            )}
          </Route>
          <ProtectedRoute
            isLoggedIn={isLoggedIn}
            isLoading={isLoading}
            path="/movies"
            showMovies={showMovies}
            handelChangeCheckbox={handelChangeCheckbox}
            component={Movies}
            getMovies={handleSearchForMovies}
            handelOpenBurger={handelOpenBurger}
            notFound={isNotFound}
            isNumberOfMoviesToAdd={isNumberOfMoviesToAdd}
            isNumberOfMoviesToRender={isNumberOfMoviesToRender}
            moreMoviesRender={setIsNumberOfMoviesToRender}
          />
          <ProtectedRoute
            path="/saved-movies"
            component={SavedMovies}
            isLoggedIn={isLoggedIn}
            isLoading={isLoading}
            notFound={isNotFound}
            handelOpenBurger={handelOpenBurger}
          />
          <ProtectedRoute
            path="/profile"
            isLoading={isLoading}
            component={Profile}
            isLoggedIn={isLoggedIn}
            signOut={signOut}
            handelOpenBurger={handelOpenBurger}
            updateUserInfo={updateUserInfo}
          />
          <Route path="/">
            <NotFound history={history} />
          </Route>
        </Switch>
        <BurgerMenu onClose={closeAllPopups} isOpen={isOpenBurger} />
        <InfoTooltip
          onClose={closeAllPopups}
          isOpen={isInfoTooltip}
          isInfoTooltipOk={isInfoTooltipOk}
          message={isMessageForUser}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
