import React from "react";
import RegOk from "../../images/imgs_svg/RegOk.svg";
import RegErr from "../../images/imgs_svg/RegErr.svg";

function InfoTooltip({ message, isOpen, onClose, isInfoTooltipOk }) {
  return (
    <div className={`popup  ${isOpen ? "popup_opened" : ""}`}>
      <div className={`popup__container`}>
        <button
          onClick={onClose}
          className={`popup__button-close-tooltip`}
          type="button"
        ></button>
        <img
          className={`popup__img-tooltip`}
          src={isInfoTooltipOk ? RegOk : RegErr}
          alt="Значек модального окна"
        />
        <h2 className={`popup__title-tooltip`}>{message}</h2>
      </div>
    </div>
  );
}

export default InfoTooltip;
