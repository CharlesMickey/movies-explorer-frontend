import React from "react";
import { Route, Switch, useHistory, Redirect } from "react-router-dom";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import Login from "../Login/Login";
import * as apiAuth from "../../utils/apiAuth.js";
import * as MoviesApi from "../../utils/MoviesApi";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import NotFound from "../NotFound/NotFound";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import SavedMovies from "../SavedMovies/SavedMovies";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import filterMovies from "../../utils/filterMovies";
import Preloader from "../Preloader/Preloader";
import { BASE_URL } from "../../utils/constants";
import GetResize from "../../utils/GetResize";

function App() {
  const history = useHistory();
  const width = GetResize()
  const [isLoggedIn, setIsLoggedIn] = React.useState(true);
  const [isOpenBurger, setIsOpenBurger] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});

  const [showMovies, setShowMovies] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isShortMovies, setIsShortMovies] = React.useState(false);

  const [isNotFound, setIsNotFound] = React.useState(false);



  function onLogin({ email, password }) {
    return apiAuth
      .authorize({ email, password })
      .then((res) => {
        console.log(res);
        history.push("/movies");
      })
      .catch((err) => {
        console.log(`${err}`);
      });
  }

  function register({ name, email, password }) {
    return apiAuth
      .register({ name, email, password })
      .then((res) => {
        console.log(res);
        history.push("/movies");
      })
      .catch((err) => {
        console.log(`${err}`);
      });
  }

  function deleteData() {
    setIsLoggedIn(false);
    localStorage.clear();
    sessionStorage.clear();
  }

  function signOut() {
    return apiAuth
      .signOut()
      .then((res) => deleteData())
      .catch((err) => {
        console.log(`${err}`);
      });
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
          console.log(`${err}`);
        });
    }
  }, []);

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

  }, []);

  function handelOpenBurger() {
    setIsOpenBurger(true);
  }

  function handelCloseBurger() {
    setIsOpenBurger(false);
  }

  function closeBurgerClickOnOverlay(e) {
    if (e.target.matches(".burger-menu")) {
      handelCloseBurger();
    }
  }

  function closeBurgerEsc(e) {
    if (e.key === "Escape") {
      handelCloseBurger();
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
          <Route exact path="/signin">
            <Login onLogin={onLogin} />
          </Route>
          <Route exact path="/signup">
            <Register register={register} />
          </Route>
          <Route exact path="/">
            <Main isLoggedIn={isLoggedIn} handelOpenBurger={handelOpenBurger} />
          </Route>
          <ProtectedRoute
            isLoggedIn={isLoggedIn}
            isLoading={isLoading}
            exact
            path="/movies"
            showMovies={showMovies}
            handelChangeCheckbox={handelChangeCheckbox}
            component={Movies}
            getMovies={handleSearchForMovies}
            handelOpenBurger={handelOpenBurger}
            notFound={isNotFound}
          />

          <Route path="/saved-movies">
            <SavedMovies
              isLoggedIn={isLoggedIn}
              isLoading={isLoading}
              notFound={isNotFound}
              handelOpenBurger={handelOpenBurger}
            />
          </Route>
          <Route path="/profile">
            <Profile
              isLoggedIn={isLoggedIn}
              signOut={signOut}
              handelOpenBurger={handelOpenBurger}
            />
          </Route>

          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <Route>
          {isLoggedIn ? <Redirect to="/movies" /> : <Redirect to="/" />}
        </Route>
        <BurgerMenu onClose={handelCloseBurger} isOpen={isOpenBurger} />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
