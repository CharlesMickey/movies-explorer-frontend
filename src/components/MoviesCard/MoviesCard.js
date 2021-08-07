import React from "react";
import CardImg from "../../images/imgs_svg/Card.png";

function MoviesCard({ cardLikeButtonClassName }) {
  const [isLike, setIsLike] = React.useState(true);
  function handelClick() {
    setIsLike(!isLike);
  }
  return (
    <li className="element">
      <img
        className="element__image"
        src={CardImg}
        alt={`Фильм: Пи Джей Харви: A dog called money`}
      />
      <div className="element__card">
        <div className="element__likes-group">
          <h2 className="element__title">Пи Джей Харви: A dog called money</h2>
          <button
            type="button"
            onClick={handelClick}
            className={`link ${cardLikeButtonClassName} ${
              isLike && "element__like_active"
            }`}
          ></button>
        </div>
        <p className="element__duration">1ч 42м</p>
      </div>
    </li>
  );
}

export default MoviesCard;
