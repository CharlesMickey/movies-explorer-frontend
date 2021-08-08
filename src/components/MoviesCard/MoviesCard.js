import React from "react";
import CardImg from "../../images/imgs_svg/Card.png";

function MoviesCard({ name, cardLikeButtonClassName }) {
  const [isLike, setIsLike] = React.useState(true);
  function handelClick() {
    setIsLike(!isLike);
  }
  return (
    <li className="element">
      <img
        className="element__image"
        src={CardImg}
        alt={name}
      />
      <div className="element__card">
        <div className="element__likes-group">
          <h2 className="element__title">{name}</h2>
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
