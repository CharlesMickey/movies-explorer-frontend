import React from "react";
import parserDuration from "../../utils/parserDuration.js";

function MoviesCard({
  duration,
  img,
  name,
  cardLikeButtonClassName,
  trailerLink,
}) {
  const [isLike, setIsLike] = React.useState(true);
  function handelClick() {
    console.log(trailerLink);
    setIsLike(!isLike);
  }
  return (
    <li className="element">
      <a href={trailerLink} rel="noopener noreferrer" target="_blank">
        <img className="element__image" src={img} alt={name} />
      </a>
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
        <p className="element__duration">{parserDuration(duration)}</p>
      </div>
    </li>
  );
}

export default MoviesCard;
