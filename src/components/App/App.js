import React from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import Login from "../Login/Login";
import * as apiAuth from "../../utils/apiAuth.js";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import NotFound from "../NotFound/NotFound";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import SavedMovies from "../SavedMovies/SavedMovies";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function App() {
  const history = useHistory();

  const [isOpenBurger, setIsOpenBurger] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});


  function onLogin({ email, password }) {
    return apiAuth
      .authorize({ email, password })
      .then((res) => {
        console.log(res)
        history.push('/movies');
      })
      .catch((err) => {
        console.log(`${err}`);
      });
  }

  function register({ name, email, password }) {
    return apiAuth
      .register({ name, email, password })
      .then((res) => {
        console.log(res)
        history.push('/movies');
      })
      .catch((err) => {
        console.log(`${err}`);
      });
  }

  function signOut() {
    return apiAuth.signOut()
      .then((res) => console.log(res))
      .catch((err) => {
        console.log(`${err}`);
      });
  }

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
            <Login onLogin={onLogin}/>
          </Route>
          <Route exact path="/signup">
            <Register register={register}/>
          </Route>
          <Route exact path="/">
            <Main handelOpenBurger={handelOpenBurger} />
          </Route>
          <Route path="/movies">
            <Movies handelOpenBurger={handelOpenBurger} />
          </Route>
          <Route path="/saved-movies">
            <SavedMovies handelOpenBurger={handelOpenBurger} />
          </Route>
          <Route path="/profile">
            <Profile signOut={signOut} handelOpenBurger={handelOpenBurger} />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <BurgerMenu onClose={handelCloseBurger} isOpen={isOpenBurger} />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
